export type ContentType = {
  title: string;
  content: string;
};

export type CourseType = {
  videoUrl: string;
  title: string;
  bookImageUrl: string;
  subtitle: string;
  content: string;
  pathwayImageUrl: string;
  pathwayUrl: string;
  descTitle: string;
  descContent: ContentType[];
};

export const courseData: CourseType[] = [
  {
    videoUrl: "https://www.youtube.com/embed/Itfiw0WmwMM",
    title: "Khóa phác đồ toán 12",
    bookImageUrl: "./books/grade_12.png",
    subtitle: "2.500K/khóa",
    content:'A. Bài giảng VOD trên web gồm 90 buổi (56 buổi giải tích + 34 buổi hình học)\nB. Livestream bổ trợ\n1. Live B (bổ trợ kiến thức nền tảng 12)\n2. Live O (bổ trợ vận dụng-vận dụng cao)\n3. Live N (về đích-luyện đề và tổng ôn)\nC. Bộ sách PHÁC ĐỒ TOÁN 2k5\n+ Bộ 8 cuốn phác đồ \n(7 cuốn theo chuyên đề và 1 cuốn ôn thi DGNL-TD) được biên soạn màu sắc sinh động và đẹp.\n+ Lưu bút Ngọc Huyền LB\n+ Thư cảm ơn',
    pathwayImageUrl: "./pathway/grade_12.png",
    pathwayUrl:
      "https://drive.google.com/file/d/1CgEvbnT91y5CVjmNmoxdPQx6WA7AjJ07/view?fbclid=IwAR2d8XRQNtp0HQ_xI0ug0YrOyv60wC9bDmLk9CojCDdKiNNjay3UizMoafA",
    descTitle: "SỰ KHÁC BIỆT VỀ KHÓA PHÁC ĐỒ TOÁN 12",
    descContent: [
      {
        title: "PHÁC ĐỒ TOÁN 12 sẽ được triển khai qua 4 kênh",
        content:
          "1. Video bài giảng Web/App" +
          "2. Học Livestream hàng tuần qua Group kín" +
          "3. Bộ sách (8 cuốn) dùng kèm với 90 buổi đào tạo" +
          "4. Nhắn tin trao đổi qua messenger.",
      },
      {
        title: "CHĂM SÓC CÁ BIỆT HÓA",
        content:
          "Trong quá trình học 90 buổi đào tạo, mỗi học trò sẽ được giao cho một chuyên viên chăm sóc riêng. Nhiệm vụ của chuyên viên là cần đảm bảo học trò nắm vững, triệt để từng buổi đào tạo, không lan man. Chuyên viên có thể linh hoạt các phương thức hỗ trợ: Nhắn tin bằng text giải đáp thông thường, quay video giải đáp, chat voice giải đáp.",
      },
    ],
  },
  {
    videoUrl: "https://www.youtube.com/embed/KSKiZOhMBaM",
    title: "Khóa phác đồ toán 11",
    bookImageUrl: "./books/grade_11.png",
    subtitle: " chỉ còn 1500K",
    content:
      "Toàn bộ chương trình Toán 11 được chia thành 95 buổi đào tạo:" +
      "Đại số & Giải tích: Bao gồm 62 buổi với 1900 bài toán chọn lọc" +
      "Hình học: Bao gồm 32 buổi với 725 bài toán chọn lọc." +
      "Bộ sách Phác Đồ Toán 11 season 2023 đi kèm với khóa học bao gồm:" +
      "1- Cuốn Phác Đồ Toán 11 - tập 1 Đại số & Giải tích: 520 trang" +
      "2- Cuốn Phác Đồ Toán 11 - tập 2 Hình học: 276 trang" +
      "3- Sổ tay LƯU BÚT - 176 trang" +
      "4- Hộp thương hiệu Ngọc Huyền LB.",
    pathwayImageUrl: "./pathway/grade_11.png",
    pathwayUrl:
      "https://drive.google.com/file/d/1gYOhp0Dnjv4GfXMKvs7EAuEf2bgCkPiK/view?fbclid=IwAR2ytRrNe2kV7RQ5Rh5hKtM9fDk5qUwg_yZsY0t6EHOrBs85ra7qETQchww",
    descTitle: "SỰ KHÁC BIỆT VỀ KHÓA PHÁC ĐỒ TOÁN 11",
    descContent: [
      {
        title:
          "Ngoài 95 buổi đào tạo quan trọng và bộ sách trên, PHÁC ĐỒ TOÁN 11 còn được trang bị thêm 02 sự chăm sóc đặc biệt sau:",
        content:
          "2 buổi Livestream hàng tuần bổ trợ, củng cố, khắc sâu 95 buổi đào tạo chính thức liên tục từ tháng 6/2022 đến 15/05/2023" +
          "Giải đáp qua tin nhắn riêng tất cả mọi bài toán trong chương trình lớp 11.",
      },
    ],
  },
];
