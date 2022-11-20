import styled from "styled-components";

export const PathwayContainer = styled.div`
  padding: 28px 30px;
  background: linear-gradient(180deg, #F3F3F3 14.53%, #FCFCFC 66.61%, #FFFFFF 100%);
  clip-path: url(#myCurve);
`;

export const PathwayTitle = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  line-height: 20px;
  color: #000;
  margin-bottom: 20px;
`;

export const PathwayButton = styled.a`
  display: block;
  margin: 12px auto 45px;
  width: 180px;
  height: 40px;
  background-color: #000;
  border-radius: 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 800;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 0.03em;
  color: #fff;
`;
