import timelineData from "./timeline-items";
import TimelineItem from "./TimelineItem";

import React, { Component } from "react";

// class Timeline extends Component {
//   constructor(props) {
//     super(props);
//   }
// }

const Timeline = () => {
  if (timelineData.length > 0)
    return (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );
  else return <p>NO</p>;
};

export default Timeline;
