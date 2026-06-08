import image0 from "../../../assets/images/projects/wiener-filter-mips/wiener-filter-mips-0.png";
import image1 from "../../../assets/images/projects/wiener-filter-mips/wiener-filter-mips-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Wiener Filter",
  theme: "dark",
  tags: ["mips", "dsp", "algorithms"],
  source: "https://github.com/VinhTechiee/Wiener-Filter-MIPS",
  videoBorder: false,
  description:
    "Triển khai pipeline Wiener filtering bằng MIPS Assembly, gồm cross-correlation, autocorrelation, tạo ma trận Toeplitz, giải hệ tuyến tính và đánh giá MMSE.<br/><br/>Dự án này giúp mình hiểu rõ hơn cách một thuật toán xử lý tín hiệu hoạt động ở mức thanh ghi, vòng lặp và bộ nhớ.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Wiener Filter",
        caption: "Pipeline xử lý tín hiệu",
      },
    },
    {
      type: "text",
      props: {
        title: "Mình làm gì",
        text:
          "Trọng tâm không chỉ là chạy được thuật toán, mà còn là giữ luồng dữ liệu đủ rõ ràng trong assembly. Phần tốn thời gian nhất là kiểm tra indexing, layout bộ nhớ và từng bước tính toán.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm chính",
        items: [
          "Cross-correlation và autocorrelation",
          "Tạo ma trận Toeplitz",
          "Giải hệ tuyến tính ở mức thấp",
          "Đánh giá kết quả bằng MMSE",
          "Thực hành thanh ghi, vòng lặp và địa chỉ bộ nhớ trong MIPS"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "Wiener Filter notes",
        caption: "Ghi chú triển khai",
      },
    },
  ],
} as const satisfies ProjectContent;
