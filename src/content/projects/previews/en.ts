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
    description: "MIPS Assembly signal-processing pipeline",
  },
  {
    title: "3D Memory Architecture",
    slug: "verilog-3d-memory",
    thumbnail: thumbnailMemory,
    description: "Verilog memory design and simulation",
  },
  {
    title: "TSP Benchmark",
    slug: "tsp-benchmark",
    thumbnail: thumbnailTsp,
    description: "Algorithm trade-offs and visualization",
  },
  {
    title: "Sorting Algorithms",
    slug: "sorting-algorithms",
    thumbnail: thumbnailSorting,
    description: "Runtime benchmarking and visual analysis",
  },
  {
    title: "Botkify Playlist",
    slug: "botkify-playlist",
    thumbnail: thumbnailBotkify,
    description: "Linked-list based playlist system",
  },
] as const satisfies ProjectPreview[];
