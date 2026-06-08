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
    "Designed and simulated an 8×8×8 memory architecture using Verilog HDL. The design includes synchronous read/write control logic, address-based access and simulation-based verification in Xilinx Vivado.<br/><br/>It was a useful exercise for connecting digital logic concepts with hardware description and debugging.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "3D Memory Architecture",
        caption: "Memory architecture overview",
      },
    },
    {
      type: "text",
      props: {
        title: "What I worked on",
        text:
          "The project models a small memory structure and verifies how read/write operations behave under clocked control. It gave me more confidence with Verilog syntax, timing and simulation workflows.",
      },
    },
    {
      type: "list",
      props: {
        title: "Main points",
        items: [
          "8×8×8 memory organization",
          "Synchronous read/write control",
          "Address decoding and data access",
          "Simulation using Xilinx Vivado",
          "Basic hardware verification mindset"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "3D Memory Architecture notes",
        caption: "Verification notes",
      },
    },
  ],
} as const satisfies ProjectContent;
