import image0 from "../../../assets/images/projects/tsp-benchmark/tsp-benchmark-0.png";
import image1 from "../../../assets/images/projects/tsp-benchmark/tsp-benchmark-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "TSP Benchmark",
  theme: "light",
  tags: ["cpp", "python", "benchmark", "algorithms"],
  source: "https://github.com/VinhTechiee/Traveling-Salesman-Problem-Benchmark",
  videoBorder: false,
  description:
    "Triển khai và so sánh một số cách giải bài toán Traveling Salesman Problem, gồm Nearest Neighbor, 2-opt và Brute Force.<br/><br/>Mục tiêu là quan sát trade-off giữa thời gian chạy, chất lượng lời giải và độ phức tạp thuật toán thông qua benchmark và visualization.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "TSP Benchmark",
        caption: "So sánh thuật toán",
      },
    },
    {
      type: "text",
      props: {
        title: "Mình làm gì",
        text:
          "Ngoài việc cài đặt thuật toán, mình tập trung đo cách chúng hoạt động với các input khác nhau. Phần visualization giúp thấy rõ hơn khác biệt giữa heuristic nhanh và cách vét cạn.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm chính",
        items: [
          "Heuristic Nearest Neighbor",
          "Tối ưu cục bộ 2-opt",
          "Brute Force làm baseline cho input nhỏ",
          "So sánh runtime và chất lượng lời giải",
          "Trực quan hóa bằng Python"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "TSP Benchmark notes",
        caption: "Ghi chú benchmark",
      },
    },
  ],
} as const satisfies ProjectContent;
