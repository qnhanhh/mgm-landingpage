import { IntroContainer, IntroHeader, Subheader } from "./styles";
import { ReactComponent as Trophy } from "../../assets/trophy.svg";
import Video from "../video";
import IntroItem from "../intro-item";

const Introduction = () => {
  return (
    <IntroContainer>
      <IntroHeader>
        <p>
          Giáo viên Toán tài năng -<br />
          tác giả của hệ thống Phác Đồ Toán.
        </p>
        <Subheader>
          <Trophy />
          <div>
            <span>TOÁN NGỌC HUYỀN LB</span>
            <span>CÔ NGỌC HUYỀN LB</span>
          </div>
        </Subheader>
      </IntroHeader>
      <Video videoUrl="https://www.youtube.com/embed/YZfdVBdURGc" />
      <IntroItem />
    </IntroContainer>
  );
};

export default Introduction;
