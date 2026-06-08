import image0 from "../../../assets/images/projects/botkify-playlist/botkify-playlist-0.png";
import image1 from "../../../assets/images/projects/botkify-playlist/botkify-playlist-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Botkify Playlist",
  theme: "dark",
  tags: ["cpp", "dsa"],
  source: "https://github.com/VinhTechiee/Botkify-Playlist-Linkedlist",
  videoBorder: false,
  description:
    "Phát triển hệ thống quản lý playlist cơ bản bằng linked list. Hệ thống hỗ trợ thêm, xóa, duyệt danh sách và xử lý bộ nhớ ở mức đơn giản.<br/><br/>Dự án nhỏ nhưng giúp mình luyện cách tự triển khai data structure thay vì chỉ dùng container có sẵn.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Botkify Playlist",
        caption: "Cấu trúc dữ liệu playlist",
      },
    },
    {
      type: "text",
      props: {
        title: "Mình làm gì",
        text:
          "Trọng tâm là hiểu node được liên kết như thế nào, các thao tác ảnh hưởng đến danh sách ra sao và cần xử lý bộ nhớ thế nào khi thêm/xóa phần tử.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm chính",
        items: [
          "Mô hình playlist bằng linked list",
          "Thêm, xóa và duyệt danh sách",
          "Xử lý bộ nhớ cơ bản",
          "Các thao tác dạng command đơn giản",
          "Thực hành data structure theo phong cách C/C++"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "Botkify Playlist notes",
        caption: "Ghi chú triển khai",
      },
    },
  ],
} as const satisfies ProjectContent;
