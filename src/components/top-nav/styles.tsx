import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/qanda_study_logo.svg";

export const NavContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Logo)`
  width: 150px;
  height: 21px;
`;

export const NavButton = styled.button`
  text-transform: uppercase;
  width: 150px;
  padding: 9px 12px;
  border: 1px solid #ff5500;
  background-color: #fff;
  border-radius: 18px;
  color: #ff5500;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`;
