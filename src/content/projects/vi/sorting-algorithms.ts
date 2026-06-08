import image0 from "../../../assets/images/projects/sorting-algorithms/sorting-algorithms-0.png";
import image1 from "../../../assets/images/projects/sorting-algorithms/sorting-algorithms-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Sorting Algorithms",
  theme: "light",
  tags: ["cpp", "python", "benchmark", "dsa"],
  source: "https://github.com/VinhTechiee/Sorting-Algorithms",
  videoBorder: false,
  description:
    "Xây dựng project nhỏ để visualization và benchmark các thuật toán sắp xếp phổ biến. Project so sánh độ phức tạp lý thuyết với thời gian chạy thực tế trên nhiều kích thước input.<br/><br/>Đây là cách mình kết nối kiến thức DSA với đo hiệu năng thực tế.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Sorting Algorithms",
        caption: "Hiệu năng thuật toán sắp xếp",
      },
    },
    {
      type: "text",
      props: {
        title: "Mình làm gì",
        text:
          "Mình cài đặt phần sorting bằng C++ và dùng Python cho benchmark/visualization. Dự án giúp mình thấy rõ hơn ảnh hưởng của constant factor và pattern input.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm chính",
        items: [
          "Cài đặt nhiều thuật toán sắp xếp",
          "Đo runtime theo kích thước input",
          "Trực quan hóa xu hướng hiệu năng",
          "So sánh với độ phức tạp lý thuyết",
          "Thực hành setup benchmark rõ ràng"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "Sorting Algorithms notes",
        caption: "Ghi chú benchmark",
      },
    },
  ],
} as const satisfies ProjectContent;
