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
    "Built a small project for visualizing and benchmarking common sorting algorithms. The project compares theoretical complexity with actual runtime behavior across different input sizes.<br/><br/>It was a practical way to connect data structures and algorithms with performance measurement.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Sorting Algorithms",
        caption: "Sorting performance view",
      },
    },
    {
      type: "text",
      props: {
        title: "What I worked on",
        text:
          "I implemented the sorting logic in C++ and used Python for benchmarking and visualization. The project helped me see how constant factors and input patterns can affect real runtime.",
      },
    },
    {
      type: "list",
      props: {
        title: "Main points",
        items: [
          "Multiple sorting algorithm implementations",
          "Runtime measurement across input sizes",
          "Visualization of performance trends",
          "Comparison with theoretical complexity",
          "Practice with clean benchmark setup"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "Sorting Algorithms notes",
        caption: "Benchmarking notes",
      },
    },
  ],
} as const satisfies ProjectContent;
