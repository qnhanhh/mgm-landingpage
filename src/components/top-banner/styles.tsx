import styled from "styled-components";

export const BannerHeader = styled.div`
  background: linear-gradient(270.73deg, #ffcf54 -13.34%, #f77a7a 120.98%);
  height: 42px;
  text-transform: uppercase;
  text-align: center;
  line-height: 42px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.04em;
  color: #000;

  & > span {
    font-weight: 700;
  }
`;

export const BannerImg = styled.img`
  background-color: #fff;
  display: block;
  margin: auto;
`;

export const BannerFooter = styled.div`
  background-color: #1d1d1d;
  height: 65px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 65px;
  text-align: center;
  color: #fff;

  & > span {
    color: #ebb825;
  }
`;

export const BannerText = styled.div`
  background-color: #fff;
  margin: auto;
  width: 360px;
  padding: 15px 22px;
  padding-bottom: 50px;
  background: linear-gradient(
    180deg,
    #f3f3f3 14.53%,
    #fcfcfc 66.61%,
    #ffffff 100%
  );
  clip-path: url(#myCurve);
  & > p {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #000;
    text-align: justify;
  }
`;
