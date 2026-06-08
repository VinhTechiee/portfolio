import thumbnailWiener from "../../../assets/thumbnails/wiener-filter-mips.png";
import thumbnailMemory from "../../../assets/thumbnails/verilog-3d-memory.png";
import thumbnailTsp from "../../../assets/thumbnails/tsp-benchmark.png";
import thumbnailSorting from "../../../assets/thumbnails/sorting-algorithms.png";
import thumbnailBotkify from "../../../assets/thumbnails/botkify-playlist.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Wiener Filter",
    slug: "wiener-filter-mips",
    thumbnail: thumbnailWiener,
    description: "Pipeline xử lý tín hiệu bằng MIPS Assembly",
  },
  {
    title: "3D Memory Architecture",
    slug: "verilog-3d-memory",
    thumbnail: thumbnailMemory,
    description: "Thiết kế và mô phỏng bộ nhớ bằng Verilog",
  },
  {
    title: "TSP Benchmark",
    slug: "tsp-benchmark",
    thumbnail: thumbnailTsp,
    description: "So sánh thuật toán và trực quan hóa",
  },
  {
    title: "Sorting Algorithms",
    slug: "sorting-algorithms",
    thumbnail: thumbnailSorting,
    description: "Benchmark và phân tích thời gian chạy",
  },
  {
    title: "Botkify Playlist",
    slug: "botkify-playlist",
    thumbnail: thumbnailBotkify,
    description: "Hệ thống playlist dùng linked list",
  },
] as const satisfies ProjectPreview[];
