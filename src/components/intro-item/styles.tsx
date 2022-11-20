import styled from "styled-components";

export const ItemContainer = styled.div`
  margin: 20px auto;
  width: 300px;
  height: 135px;
  padding: 30px 24px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  background-color: #fff;

  & > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #000;
    text-align: justify;
  }
`;

type TitleProps = {
  props: string;
};

export const ItemTitle = styled.h1<TitleProps>`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 40px;
  line-height: 20px;
  color: ${({ props }) => (props === "secondary" ? "#0075ff" : "#ff5500")};
`;
