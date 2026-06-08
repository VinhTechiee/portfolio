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
    "Developed a basic playlist management system using linked list data structures. The system supports insertion, deletion, traversal and simple memory handling.<br/><br/>The project is small, but it helped me practice data-structure implementation instead of only using built-in containers.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Botkify Playlist",
        caption: "Playlist data structure",
      },
    },
    {
      type: "text",
      props: {
        title: "What I worked on",
        text:
          "The main focus was understanding how nodes are linked, how operations affect the list, and how memory should be handled when items are added or removed.",
      },
    },
    {
      type: "list",
      props: {
        title: "Main points",
        items: [
          "Linked-list playlist model",
          "Insertion, deletion and traversal",
          "Basic memory management",
          "Simple command-based operations",
          "Data-structure practice in C/C++ style"
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "Botkify Playlist notes",
        caption: "Implementation notes",
      },
    },
  ],
} as const satisfies ProjectContent;
