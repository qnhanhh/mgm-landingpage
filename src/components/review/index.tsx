import Header from "../header";
import { ReviewContainer, ReviewImg } from "./styles";
import reviews from "../../assets/reviews";

const Review = () => {
  return (
    <ReviewContainer>
      <Header headerText="CẢM NHẬN CỦA HỌC SINH" />
      {reviews.map((review, index) => (
         <ReviewImg key={index} src={review} alt="" />
      ))}
    </ReviewContainer>
  );
};

export default Review;
