import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faJs,
  faEmber,
  faNode,
  faJava,
  faAngular,
  faGoogle,
  faGithub,
  faYoutube,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
library.add(
  faReact,
  faJs,
  faEmber,
  faNode,
  faJava,
  faAngular,
  faGoogle,
  faGithub,
  faYoutube,
  faServer,
  faDatabase
);

export default [
  {
    project: "Forestcasting",
    description: "Forest fire management powered by predictive analytics",
    link: "https://www.youtube.com/watch?v=0TOiHwv9nYo&t=5s",
    linkLabel: "Project Demo",
    linkIcon: faYoutube,
    technologies: [
      { tech: "ReactJS", icon: faReact },
      { tech: "Node.js", icon: faNode },
      { tech: "Express", icon: faServer },
      { tech: "MongoDB", icon: faDatabase },
      { tech: "Python", icon: faPython }
    ],
    background: "/images/forest1.jpeg"
  },

  {
    project: "Self Start, Body Smart",
    description:
      "A web-based patient management software system designed, built, and delivered to a local physiotherapy clinic interested in bringing treatment online.",
    link: "https://www.youtube.com/watch?v=nUiOFurz1N0",
    linkLabel: "Product Demo",
    linkIcon: faYoutube,
    technologies: [
      { tech: "Ember.js", icon: faEmber },
      { tech: "Node.js", icon: faNode },
      { tech: "Express", icon: faServer },
      { tech: "MongoDB", icon: faDatabase }
    ],
    background: "/images/self-start.jpg"
  },
  {
    project: "Geolocation & Geofencing",
    description:
      "Location features used hand in hand to either restrict users from an app's features or reward them.",
    link: "https://github.com/skananit/",
    linkLabel: "Project Code",
    linkIcon: faGithub,
    technologies: [
      { tech: "ReactJS", icon: faReact },
      { tech: "Node.js", icon: faNode },
      { tech: "Google Map APIs", icon: faGoogle }
    ],
    background: "/images/goe.png"
  },
  {
    project: "Chat App",
    description:
      "Multithreaded client/server chatroom application allows multiple users to chat in one room.",
    link: "https://github.com/skananit/chit-chat-app",
    linkLabel: "Project Code",
    linkIcon: faGithub,
    technologies: [
      { tech: "Java", icon: faJava },
      { tech: "Socket Programming", icon: faServer }
    ],
    background: "/images/chat-app.jpg"
  },
  {
    project: "Portfolio Website",
    description:
      "Simple portfolio website hosted on GitHub Pages (Demoed right here!)",
    link: "https://github.com/skananit/skananit.github.io",
    linkLabel: "Project Code",
    linkIcon: faGithub,
    technologies: [{ tech: "ReactJS", icon: faReact }],
    background: "/images/portfolio.png"
  },

  {
    project: "Blood Donation Management System",
    description:
      "A database management tool to enhance blood donors’ experience by implementing features such as eligibility check and appointment booking.",
    link: "https://github.com/skananit/blood-donation-management-system",
    linkLabel: "Project Code",
    linkIcon: faGithub,
    technologies: [
      { tech: "Angular", icon: faAngular },
      { tech: "Node.js", icon: faNode },
      { tech: "MySQL", icon: faDatabase },
      { tech: "Express", icon: faServer }
    ],
    background: "/images/blood-donation.png"
  },
  {
    project: "Audio Visualizer",
    description: "Visualize audio data in real time.",
    link: "https://github.com/skananit/audio-visualizer",
    linkLabel: "Project Code",
    linkIcon: faGithub,
    technologies: [
      { tech: "ReactJS", icon: faReact },
      { tech: "Node.js", icon: faNode }
    ],
    background: "/images/audio-visualizer.jpeg"
  }
];
