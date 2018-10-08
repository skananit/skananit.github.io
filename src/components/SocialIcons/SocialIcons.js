import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/skananit" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shimakanani/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@shima.kanani.t" style={ { color: colorPrimary } }><i className="fab fa-medium"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1DYFKC6SEr9bQeN9FxZoSqi39Je7DR9Ev?usp=sharing" style={ { color: colorPrimary } }><i className="far fa-file-pdf"></i></a>

      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;