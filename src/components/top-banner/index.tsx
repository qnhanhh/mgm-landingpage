import { BannerFooter, BannerHeader, BannerImg, BannerText } from "./styles";
import top_banner from "../../assets/top_banner.png";
const TopBanner = () => {
  return (
    <>
      <BannerHeader>
        TƯ VẤN KHÓA HỌC & <span>NHẬN QUÀ NGAY</span>
      </BannerHeader>
      <BannerImg src={top_banner} alt="TƯ VẤN KHÓA HỌC & NHẬN QUÀ NGAY" />
      <BannerFooter>
        NHẬN NGAY <span>100.000 VNĐ</span>
      </BannerFooter>
      <BannerText>
        <p>
          Từ ngày 13/11, cứ mỗi lần giới thiệu bạn ĐĂNG KÝ KHÓA HỌC - CÔ NGỌC
          HUYỀN LB thành công:
          <br />
          ✔️ Em nhận được Voucher hoặc tiền mặt trị giá 100.000 VNĐ từ QANDA.
          <br />
          ✔️ Bạn được giới thiệu cũng nhận Voucher hoặc tiền mặt trị giá 100.000
          VNĐ. <br />
          🎁 Cơ hội nhận quà không giới hạn. Càng giới thiệu nhiều, quà nhận
          càng khủng.
        </p>
      </BannerText>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 0.9 
              L 0 0 
              L 1 0 
              L 1 0.9 
              C .75 .9, .75 .9, 0.5 1 
              C .25 .9, .25 .9, 0 0.9
              Z"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default TopBanner;
