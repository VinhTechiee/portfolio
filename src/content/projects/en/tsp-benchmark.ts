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
    "Implemented and compared several approaches for the Traveling Salesman Problem, including Nearest Neighbor, 2-opt and Brute Force.<br/><br/>The goal was to see the trade-off between runtime, solution quality and algorithm complexity through benchmarking and visualization.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "TSP Benchmark",
        caption: "Algorithm comparison",
      },
    },
    {
      type: "text",
      props: {
        title: "What I worked on",
        text:
          "Instead of only implementing the algorithms, I tried to measure how they behave with different inputs. The visualization part made the difference between a quick heuristic and an exhaustive method easier to see.",
      },
    },
    {
      type: "list",
      props: {
        title: "Main points",
        items: [
          "Nearest Neighbor heuristic",
          "2-opt local optimization",
          "Brute-force baseline for small cases",
          "Runtime and quality comparison",
          "Python-based visualization for analysis"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "TSP Benchmark notes",
        caption: "Benchmarking notes",
      },
    },
  ],
} as const satisfies ProjectContent;
