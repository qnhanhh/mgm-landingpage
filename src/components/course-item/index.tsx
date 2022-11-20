import { CourseType } from "../../data/course-data";
import CourseDescription from "../course-description";
import Header from "../header";
import StudyPathway from "../study-pathway";
import Video from "../video";
import {
  CourseContainer,
  CourseSubtitle,
  CourseText,
  CourseTitle,
} from "./styles";

type ItemProps = {
  item: CourseType;
};

const CourseItem = ({ item }: ItemProps) => {
  const {
    videoUrl,
    title,
    bookImageUrl,
    subtitle,
    content,
    pathwayImageUrl,
    pathwayUrl,
    descTitle,
    descContent,
  } = item;
  return (
    <CourseContainer>
      <Header headerText="Video học thử lộ trình học tập" />
      <Video videoUrl={videoUrl} />
      <CourseTitle>{title}</CourseTitle>
      <img src={bookImageUrl} alt="" />
      <CourseSubtitle>{subtitle}</CourseSubtitle>
      <CourseText>{content}</CourseText>
      <StudyPathway image={pathwayImageUrl} url={pathwayUrl}/>
      <CourseDescription title={descTitle} content={descContent}/>
    </CourseContainer>
  );
};

export default CourseItem;
