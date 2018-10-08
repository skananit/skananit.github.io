import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";
import Skills from "../../components/Skills/Skills";

const SkillsPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="skills-page">
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>
          <i class="fas fa-cogs" /> SKILLS & TOOLS
        </h1>
        <div className="skills-wrapper">
          <div className="skills-content" style={{ color: textPrimary }}>
            <div className="Skills">
              <Skills
                skills={[
                  {
                    title: "Javascript",
                    compentency: 5,
                    category: ["Web Development", "Languages", "Javascript"]
                  },
                  {
                    title: "Node.JS",
                    compentency: 5,
                    category: ["Web Development", "Frameworks", "Javascript"]
                  },
                  {
                    title: "ReactJS",
                    compentency: 4,
                    category: ["Web Development", "Frameworks", "Javascript"]
                  },
                  {
                    title: "React Native",
                    compentency: 4,
                    category: ["Frameworks", "Javascript"]
                  },

                  {
                    title: "Bootstrap",
                    compentency: 3,
                    category: ["Web Development", "Frameworks"]
                  },
                  {
                    title: "Bash",
                    compentency: 3,
                    category: ["Tools", "Languages"]
                  },
                  {
                    title: "Excel",
                    compentency: 4,
                    category: ["Tools"]
                  },
                  {
                    title: "Google Cloud Platform",
                    compentency: 4,
                    category: ["Web Development", "Tools"]
                  },
                  {
                    title: "Heroku",
                    compentency: 2,
                    category: ["Web Development", "Tools"]
                  },
                  {
                    title: "MongoDB",
                    compentency: 4,
                    category: ["Web Development", "Databases"]
                  },
                  {
                    title: "Firebase",
                    compentency: 4,
                    category: ["Web Development", "Databases"]
                  },
                  {
                    title: "Datastore",
                    compentency: 4,
                    category: ["Web Development", "Databases"]
                  },

                  {
                    title: "MySQL",
                    compentency: 4,
                    category: ["Web Development", "Databases"]
                  },

                  {
                    title: "Redux",
                    compentency: 5,
                    category: ["Javascript"]
                  },
                  {
                    title: "Redis",
                    compentency: 3,
                    category: ["Web Development", "Databases"]
                  },
                  {
                    title: "Matlab",
                    compentency: 3,
                    category: ["Data Science", "Machine Learning", "Languages"]
                  },

                  {
                    title: "ExpressJS",
                    compentency: 5,
                    category: ["Web Development", "Frameworks", "Javascript"]
                  },
                  {
                    title: "EmberJS",
                    compentency: 5,
                    category: ["Web Development", "Frameworks", "Javascript"]
                  },
                  {
                    title: "AngularJS",
                    compentency: 5,
                    category: ["Web Development", "Frameworks", "Javascript"]
                  },

                  {
                    title: "D3",
                    compentency: 3,
                    category: [
                      "Web Development",
                      "Frameworks",
                      "Design",
                      "Javascript"
                    ]
                  },

                  {
                    title: "Product Development",
                    compentency: 3,
                    category: ["Other"]
                  },
                  {
                    title: "Data Analysis",
                    compentency: 5,
                    category: ["Data Science", "Machine Learning"]
                  },

                  {
                    title: "Git",
                    compentency: 3,
                    category: ["Tools"]
                  },
                  {
                    title: "Bitbucket",
                    compentency: 4,
                    category: ["Tools"]
                  },
                  {
                    title: "Jira",
                    compentency: 5,
                    category: ["Tools"]
                  },
                  {
                    title: "Confluence",
                    compentency: 5,
                    category: ["Tools"]
                  },
                  {
                    title: "Numpy",
                    compentency: 2,
                    category: ["Data Science", "Machine Learning", "Python"]
                  },

                  {
                    title: "Typescript",
                    compentency: 4,
                    category: ["Web Development", "Languages"]
                  },
                  {
                    title: "HTML",
                    compentency: 5,
                    category: ["Web Development", "Languages"]
                  },
                  {
                    title: "CSS",
                    compentency: 5,
                    category: ["Web Development", "Languages"]
                  },
                  {
                    title: "NestJS",
                    compentency: 5,
                    category: ["Web Development", "Frameworks", "Javascript"]
                  },
                  {
                    title: "SASS/SCSS",
                    compentency: 3,
                    category: ["Web Development", "Languages"]
                  },

                  {
                    title: "Python",
                    compentency: 4,
                    category: ["Languages"]
                  },
                  {
                    title: "C++",
                    compentency: 3,
                    category: ["Languages"]
                  },
                  {
                    title: "Photoshop",
                    compentency: 3,
                    category: ["Design"]
                  },
                  {
                    title: "Sketch",
                    compentency: 4,
                    category: ["Design"]
                  },
                  {
                    title: "Adobe Illustrator",
                    compentency: 3,
                    category: ["Design"]
                  },
                  {
                    title: "InVision",
                    compentency: 4,
                    category: ["Design"]
                  },

                  {
                    title: "Wireframing",
                    compentency: 4,
                    category: ["Design", "Web Development"]
                  },

                  {
                    title: "Google Venture Design Sprint",
                    compentency: 5,
                    category: ["Tool"]
                  },
                  {
                    title: "Audio Visualization",
                    compentency: 4,
                    category: ["Data Science", "Javascript"]
                  },
                  {
                    title: "GraphQL",
                    compentency: 2,
                    category: ["Web Development", "Databases"]
                  }
                ]}
                categories={[
                  {
                    name: "Data Science",
                    color: "#0b2d66"
                  },
                  {
                    name: "Databases",
                    color: "#23509b"
                  },
                  {
                    name: "Design",
                    color: "#3971ce"
                  },
                  {
                    name: "Frameworks",
                    color: "#679bef"
                  },
                  {
                    name: "Javascript",
                    color: "#6d8cbf"
                  },
                  {
                    name: "Languages",
                    color: "#032154"
                  },
                  {
                    name: "Machine Learning",
                    color: "#195fb5"
                  },
                  {
                    name: "Other",
                    color: "#5495e5"
                  },
                  {
                    name: "Tools",
                    color: "#74aff7"
                  },
                  {
                    name: "Web Development",
                    color: "#99c3f7"
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SkillsPage.contextTypes = {
  theme: PropTypes.any
};

export default SkillsPage;
