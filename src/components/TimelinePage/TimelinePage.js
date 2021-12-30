import React from "react";
import TimelineItem from "./TimelineItem";

import timelineData from "./timeline-items";
import "./styles.css";

class TimelinePage extends React.Component {
  render() {
    return (
      <div className="flex-center flex-direction-col padding-30">
        <h1 className="text-center title-font line-height-1 letter-spacing-normal">
          Professional Experience
        </h1>
        <p className="font-weight-100 text-center margin-0 margin-bottom-30 description-font">
          I have a diverse background in business & software engineering roles
          across Fintech & Ecommerce industries
        </p>
        <div className="_2-column-grid resume-grid wf-grid">
          {timelineData.map((data, idx) => (
            <TimelineItem
              key={idx}
              role={data.role}
              logo={data.logo}
              date={data.date}
              description={data.description}
              href={data.href}
            >
              <img src={data.logo} className="width-50-percent" alt="" />
              <h3 style={{ fontSize: "20px" }}>{data.role}</h3>
              <p>{data.description}</p>
            </TimelineItem>
          ))}
        </div>
      </div>
    );
  }
}
export default TimelinePage;
