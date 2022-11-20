import styled from "styled-components";

export const DescContainer = styled.div`
  margin-top: -70px;
  padding: 70px 0 10px;
  background: linear-gradient(
    180deg,
    #f3f3f3 16.12%,
    #fcfcfc 67.23%,
    #ffffff 100%
  );
`;

export const DescTitle = styled.p`
  margin-top: 25px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: #000;
`;

export const DescContent = styled.div`
  text-align: left;
  margin: 20px 15px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.03em;
  & > h6 {
    font-size: 12px;
    font-weight: 700;
    color: #ff5500;
  }
  & > p {
    font-weight: 500;
    color: #000;
  }
`;
