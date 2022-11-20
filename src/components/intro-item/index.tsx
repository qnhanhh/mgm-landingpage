import { DataType } from "../../data/intro-list";
import { ItemContainer, ItemTitle } from "./styles";

type ItemProps = {
  item: DataType;
};
const IntroItem = ({ item }: ItemProps) => {
  const { title, content, props } = item;
  return (
    <ItemContainer>
      {title && <ItemTitle props={props || ""}>{title}</ItemTitle>}
      <p>{content}</p>
    </ItemContainer>
  );
};

export default IntroItem;
