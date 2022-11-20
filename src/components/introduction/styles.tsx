import styled from "styled-components";

export const IntroContainer = styled.div`
  margin-top: -50px;
  background: linear-gradient(
    180deg,
    #f3f3f3 16.12%,
    #fcfcfc 67.23%,
    #ffffff 100%
  );
  padding: 70px 20px 20px;
`;

export const IntroHeader = styled.div`
  width: 291px;
  margin: 0 auto 25px;
  & > p {
    position: relative;
    padding: 20px 27px;
    background-color: #ffcccc;
    border-radius: 100px;
    color: #292929;
    font-weight: 800;
    font-size: 13px;
    line-height: 20px;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 50px;
      width: 20px;
      height: 28px;
      background-color: #ffcccc;
      clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
  }
`;

export const Subheader = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 4px;
    flex-direction: column;
    position: relative;
    border-left: 1px solid #e0e0e0;
    padding-left: 8px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: -0.03em;
    color: #808080;

    &>span:first-child{
        color: #292929;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
    }
  }
`;


