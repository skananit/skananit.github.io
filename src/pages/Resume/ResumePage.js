import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";

import "./style.scss";
import Timeline from "@components/Timeline";

const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="resume-page">
      <div className="content-grid">
        <h1 style={{ color: "black" }}>Professional Timeline</h1>
        <Timeline />
      </div>
      <br />
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

ResumePage.contextTypes = {
  theme: PropTypes.any
};

export default ResumePage;

// import React from "react";
// import PropTypes from "prop-types";
// import ResumeItem from "@components/ResumeItem";
// import ScrollToNext from "@components/ScrollToNext";
// import resumeItems from "./resume-items";
// import Nav from "@components/Nav";
// import Timeline from "@components/Timeline";
// import { StyleRoot } from "radium";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// import "./style.scss";

// const ResumePage = (props, context) => {
//   const {
//     theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
//   } = context;

//   return (
//     <div className="resume-page">
//       <div className="content-grid">
//         <div className="Wrapper">
//           <div className="right">
//             <StyleRoot>
//               <Timeline
//                 color={"black"}
//                 animations={true}
//                 lineColor={"#A7A2A9"}
//                 activeColor={"gray"}
//               >
//                 <div icon="o">
//                   <h1>Software Engineer @ Scotiabank</h1>
//                 </div>
//                 <div>
//                   <h1>Work 2</h1>
//                   <ul>
//                     <li>arbitrary content in entries</li>
//                   </ul>
//                 </div>
//                 {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
//                   <div key={i}>
//                     <h1>{i}</h1>
//                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//                     diam nonumy eirmod tempor invidunt ut labore et dolore magna
//                     aliquyam erat, sed diam voluptua. At vero eos et accusam et
//                     justo duo dolores et ea rebum. Stet clita kasd gubergren, no
//                     sea takimata sanctus est Lorem ipsum dolor sit amet.
//                   </div>
//                 ))}
//               </Timeline>
//             </StyleRoot>
//           </div>
//           <div className="LeftContent3">
//             <img className="cabout" src="/images/ex.png" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ResumePage.contextTypes = {
//   theme: PropTypes.any
// };

// export default ResumePage;
