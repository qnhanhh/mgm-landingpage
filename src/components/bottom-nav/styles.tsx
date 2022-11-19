import styled from "styled-components";

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomButton = styled.button`
  border: none;
  height: 64px;
  flex: 1;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.04em;
`;

export const SecondaryButton = styled(BottomButton)`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.03em;
  background-color: #ff5500;
  color: #fff;
`;
