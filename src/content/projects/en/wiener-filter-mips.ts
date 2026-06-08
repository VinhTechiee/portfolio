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
    "Implemented a Wiener filtering pipeline in MIPS Assembly, including correlation modules, Toeplitz matrix construction, linear system solving and MMSE evaluation.<br/><br/>This project helped me understand how signal-processing algorithms behave when every register, loop and memory access has to be handled manually.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Wiener Filter",
        caption: "Signal-processing pipeline",
      },
    },
    {
      type: "text",
      props: {
        title: "What I worked on",
        text:
          "The focus was not only to reproduce the algorithm, but also to keep the data flow understandable in assembly. I spent most of the time checking indexing, memory layout and numerical steps carefully.",
      },
    },
    {
      type: "list",
      props: {
        title: "Main points",
        items: [
          "Cross-correlation and autocorrelation modules",
          "Toeplitz matrix construction",
          "Linear system solving in low-level code",
          "MMSE-based result checking",
          "Practice with MIPS registers, loops and memory addressing"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "Wiener Filter notes",
        caption: "Implementation notes",
      },
    },
  ],
} as const satisfies ProjectContent;
