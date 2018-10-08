import React from "react";
import PropTypes from "prop-types";
import "./style";

const ResumeItem = (props, context) => {
  const {
    theme: { colorPrimary, textAlternate }
  } = context;

  if (props.render) return props.render;
  else
    return (
      <div
        className="resume-item"
        style={{ backgroundColor: colorPrimary, color: textAlternate }}
      >
        {/* <div className="resume-item__company">Badass</div> */}
        <div className="resume-item__pic">
          <a src="#">
            <img className="logo" src="#" />
          </a>
        </div>
        <div className="resume-item__position">Position</div>
        <div className="resume-item__location">Location</div>

        <div className="resume-item__desc">
          I do badass things and kickass everyday! I do badass things and
          kickass everyday! I do badass things and kickass everyday!
        </div>

        <div className="resume-item__links">
          <a href="#">
            <i className="fas fa-external-link-alt" />
            blog
          </a>
        </div>
        <div className="resume-item__date">Date</div>
      </div>
    );
};

ResumeItem.contextTypes = {
  theme: PropTypes.any
};

export default ResumeItem;
