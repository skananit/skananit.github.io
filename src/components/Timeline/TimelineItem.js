import './style.scss';
import React, { Component } from 'react';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      {/* <span className="tag" style={{ background: data.category.color }}> */}
      {/* <img className="tag" src={data.logo} /> */}

      {/* </span> */}

      {/* <h3 style={{ paddingTop: "5%", fontSize: "1.5vw" }}>{data.company}</h3> */}
      <img src={data.logo} style={{ width: '50%' }} />

      <h3 style={{ fontWeight: '500', fontSize: '18px', paddingTop: '5%' }}>{data.role}</h3>
      <time>{data.date}</time>

      <p>{data.description}</p>

      <a href={data.href} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>

      <span className="circle" />
    </div>
  </div>
);
export default TimelineItem;
