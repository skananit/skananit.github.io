import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import timelineData from "./timeline-items";
import "./styles.css";

class TimelinePage extends React.Component {
  render() {
    return (
      <div className="timeline-page">
        <div className="timeline-container">
          <h1>Timeline</h1>
        </div>
        <div className="timeline-content">
          <Timeline lineColor={"#ddd"}>
            {timelineData.map((data, idx) => (
              <TimelineItem
                key={idx}
                dateText={data.date}
                dateInnerStyle={{
                  background: "gray",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "100"
                }}
                bodyContainerStyle={
                  {
                    // padding: "20px",
                    // borderRadius: "8px",
                    // boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                  }
                }
              >
                <img src={data.logo} className="logo" alt="" />
                <h3>{data.role}</h3>
                <p>{data.description}</p>
                {/* <a src={data.href}>Website</a> */}
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    );
  }
}
export default TimelinePage;
