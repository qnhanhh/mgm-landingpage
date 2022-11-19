import { HeaderContainer } from "./styles";

type HeaderProps = {
  headerText: string;
};

const Header = ({ headerText }: HeaderProps) => {
  return (
    <HeaderContainer>
      <span>{headerText}</span>
    </HeaderContainer>
  );
};

export default Header;
