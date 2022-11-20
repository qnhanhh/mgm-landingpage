import { ContentType } from "../../data/course-data";
import { DescContainer, DescContent, DescTitle } from "./styles";

type DescType={
  title:string,
  content: ContentType[]
}

const CourseDescription = ({title, content}:DescType) => {
  return (
    <DescContainer>
      <DescTitle>{title}</DescTitle>
      {content.map((item, index)=>(
      <DescContent key={index}>
        <h6>{item.title}</h6>
        <p>{item.content}</p>
      </DescContent>

      ))}
    </DescContainer>
  );
};

export default CourseDescription;
