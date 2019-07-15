import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faJs,
  faEmber,
  faNode,
  faJava,
  faAngular,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
library.add(faReact, faJs, faEmber, faNode, faJava, faAngular, faGoogle);

export default [
  {
    project: "Audio Visualizer",
    description: "Visualize audio data in real time",
    code: "https://github.com/skananit/audio-visualizer",
    icons: [faReact, faJs],
    background: "/images/sound.jpeg"
  },
  {
    project: "Self Start, Body Smart",
    description:
      "Patient management software for a local physiotherapist in London, Ontario",
    code: "https://www.youtube.com/watch?v=nUiOFurz1N0",
    icons: [faEmber, faJs, faNode],
    background: "/images/self.jpeg"
  },
  {
    project: "Geolocation & Geofencing",
    description:
      "Location features used hand in hand to either restrict users from an app's features or reward them",
    code: "https://github.com/skananit/",
    icons: [faReact, faJs, faNode, faGoogle],
    background: "/images/map.jpg"
  },
  {
    project: "Chatroom Application",
    description:
      "Multithreaded client/server chatroom application allows multiple users to chat in one room",
    code: "https://github.com/skananit/chit-chat-app",
    icons: [faJava],
    background: "/images/chat3.jpeg"
  },
  {
    project: "Portfolio Website",
    description:
      "Simple portfolio website hosted on GitHub Pages (Demoed right here!)",
    code: "https://github.com/skananit/skananit.github.io",
    icons: [faReact, faJs],
    background: "/images/pexels2.jpeg"
  },

  {
    project: "Blood Donation Management System",
    description:
      " Database management tool to enhance blood donors’ donation experience",
    code: "https://github.com/skananit/blood-donation-management-system",
    icons: [faReact, faJs, faAngular],
    background: "/images/blood.jpeg"
  }
];
