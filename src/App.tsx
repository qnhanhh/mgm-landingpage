import React from "react";
import BottomNav from "./components/bottom-nav";
import CourseItem from "./components/course-item";
import Introduction from "./components/introduction";
import Review from "./components/review";
import TopBanner from "./components/top-banner";
import TopNav from "./components/top-nav";
import { courseData } from "./data/course-data";
import styled from "styled-components";

const AppContainer=styled.div`
  position: relative;
`
function App() {
  return (
    <AppContainer>
      <TopNav />
      <TopBanner />
      <Introduction />
      {courseData.map((item,index)=>(
        <CourseItem item={item} key={index} />
      ))}
      <Review />
      <BottomNav/>
    </AppContainer>
  );
}

export default App;
