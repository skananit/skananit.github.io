import React from 'react';
import PropTypes from 'prop-types';
import ResumeItem from '@components/ResumeItem';
import ScrollToNext from '@components/ScrollToNext';
import resumeItems from './resume-items';
import Nav from '@components/Nav';
import Timeline from '@components/Timeline';
import { StyleRoot } from 'radium';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './style.scss';

const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="resume-page">
      <div className="Wrapper">
        <div className="right">
          {/* <VerticalTimeline>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2011 - present" iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
          </VerticalTimeline> */}
          <StyleRoot>
            <Timeline color={'black'} animations={true} lineColor={'#A7A2A9'} activeColor={'#F45B69	'}>
              <div icon="a">
                <h1>Work 1</h1>
              </div>
              <div>
                <h1>Work 2</h1>
                <ul>
                  <li>arbitrary content in entries</li>
                </ul>
              </div>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                <div key={i}>
                  <h1>{i}</h1>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
              ))}
            </Timeline>
          </StyleRoot>
          {/* <h1 style={{ color: colorPrimary }}>PROFESSIONAL TIMELINE</h1> */}
          {/* <p>(a selection of my recent projects that I'm not too ashamed of)</p> */}
          {/* <div className="resume-wrapper"> */}
          {/* <style jsx="true">
            {`
              .resume-item {
                background-color: ${"#ffffff"};
                color: ${textAlternate};
              }
              .resume-item a {
                color: ${textAlternate};
              }
              .resume-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {resumeItems.map((item, i) => (
            <ResumeItem render={item.render} key={i} />
          ))} */}
          {/* </div> */}
        </div>
        <div className="LeftContent3">
          <img className="cabout" src="/images/ex.png" />
        </div>
      </div>

      {/* <Nav /> */}
      {/* <ScrollToNext pageSelector=".resume-page" /> */}
    </div>
  );
};

ResumePage.contextTypes = {
  theme: PropTypes.any
};

export default ResumePage;
