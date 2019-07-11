import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page">
      <style jsx="true">
        {`
          .highlight {
            background-color: white;
          }
          ::selection {
            background-color: white;
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: 'black' }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: 'black' }}>
            <p>
              I'm a <span className="highlight">product-focused developer</span> who loves creating innovative solutions and making things happen. I’ve spent the past three years studying software
              engineering and my summers gaining hands-on experience to further develop my technical skills. As a highly empathetic individual, I have always strived to understand an experience from
              the end user’s perspective. My love for <span className="highlight">JavaScript</span> and everything web, combined with my curiosity inspires me to explore new ways to{' '}
              <span className="highlight">solve unmet user needs</span> through user research and intuitive interactions.
            </p>
            <p>
              Most recently, I completed a summer internship at
              <a href={'https://digitalfactory.scotiabank.com/'}> Scotiabank's Digital Banking Unit </a>
              which led me to discover my passion for <span className="highlight">solving problems at the intersection of business and technology</span>. Having a love for learning, I decided to
              pursue a dual degree in business and engineering at <a href={'https://www.ivey.uwo.ca'}> Ivey Business School</a>,<a href={'https://www.uwo.ca'}> Western University. </a>
            </p>
            <p>
              Being highly motivated by <span className="highlight">encouraging young women to pursue careers in tech</span> inspired me to start
              <a href={'https://girlplusplus.ca'}> girl++ </a>
              with a classmate. Our goal is to empower, educate, and guide females pursuing post-secondary studies who have an interest in technology by providing female role-models and hands-on
              experience in all areas of technology. With women representing only 20% of Canadian engineering students, this non-profit organization plays an instrumental role in ensuring that our
              university remains a supportive and inviting environment. Recently we have expanded to another Ontario university and gained up to a total of 200 members through our mentorship program,
              networking events and educational workshops.
            </p>
            <p>
              In my spare time, my curious nature often finds me exploring new cuisines and eating terrific food, watching standup comedies or documentaries, and spending quality time with friends and
              family.
            </p>
            <p>
              <span className="highlight">Let's connect</span>, I love exchanging stories with other developers, designers, and students. Feel free to contact me on{' '}
              <a href={'https://www.linkedin.com/in/shimakanani/'}>Linkedin!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
AboutPage.contextTypes = {
  theme: PropTypes.any
};
export default AboutPage;
