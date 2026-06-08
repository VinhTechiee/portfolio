import image0 from "../../../assets/images/projects/verilog-3d-memory/verilog-3d-memory-0.png";
import image1 from "../../../assets/images/projects/verilog-3d-memory/verilog-3d-memory-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "3D Memory Architecture",
  theme: "dark",
  tags: ["verilog", "fpga", "dsa"],
  source: "https://github.com/VinhTechiee/Verilog-3D-Memory-Architecture",
  videoBorder: false,
  description:
    "Thiết kế và mô phỏng kiến trúc bộ nhớ 8×8×8 bằng Verilog HDL. Thiết kế gồm logic đọc/ghi đồng bộ, truy cập theo địa chỉ và kiểm thử bằng Xilinx Vivado.<br/><br/>Đây là một bài tập tốt để nối kiến thức digital logic với mô tả phần cứng và mô phỏng.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "3D Memory Architecture",
        caption: "Tổng quan kiến trúc bộ nhớ",
      },
    },
    {
      type: "text",
      props: {
        title: "Mình làm gì",
        text:
          "Dự án mô hình hóa một cấu trúc bộ nhớ nhỏ và kiểm tra hành vi đọc/ghi theo clock. Qua đó mình quen hơn với Verilog, timing và workflow mô phỏng.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm chính",
        items: [
          "Tổ chức bộ nhớ 8×8×8",
          "Logic đọc/ghi đồng bộ",
          "Giải mã địa chỉ và truy cập dữ liệu",
          "Mô phỏng bằng Xilinx Vivado",
          "Làm quen với tư duy verification"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "3D Memory Architecture notes",
        caption: "Ghi chú kiểm thử",
      },
    },
  ],
} as const satisfies ProjectContent;
