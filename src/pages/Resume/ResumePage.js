import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';

import './style.scss';
import Timeline from '@components/Timeline';

const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="resume-page">
      <div className="content-grid">
        <h1 style={{ color: 'black' }}>Professional Timeline</h1>
        <Timeline />
      </div>
    </div>
  );
};

ResumePage.contextTypes = {
  theme: PropTypes.any
};

export default ResumePage;
