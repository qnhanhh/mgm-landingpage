import { PathwayButton, PathwayContainer, PathwayTitle } from "./styles";

type PathwayType={
  image:string, 
  url:string
}

const StudyPathway = ({image, url}:PathwayType) => {
  return (
    <PathwayContainer>
      <PathwayTitle>LỘ TRÌNH CHI TIẾT</PathwayTitle>
      <img src={image} alt="" />
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 0.9 
              L 0 0 
              L 1 0 
              L 1 0.9 
              C .75 .9, .75 .9, 0.5 1 
              C .25 .9, .25 .9, 0 0.9
              Z"
            />
          </clipPath>
        </defs>
      </svg>
      <PathwayButton href={url} target='_blank'>
        Xem bản đầy đủ
      </PathwayButton>
    </PathwayContainer>
  );
};

export default StudyPathway;
