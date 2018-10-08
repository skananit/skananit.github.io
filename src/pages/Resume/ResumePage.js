import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";
import Skills from "../../components/Skills/Skills";

const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="resume-page">
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <div className="resume-wrapper">
          <div className="resume-content" style={{ color: textPrimary }}>
            <h1 style={{ color: colorPrimary }}>PROFESSIONAL TIMELINE</h1>
            <br />{" "}
            <div className="block">
              <a href={"http://communitech.ca"}>
                <img className="logos" src={"/images/com.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">COMMUNITECH</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Campus Ambassoder{" "}
              </div>
              <p>
                Promoting Communitech startups and encouraging entrepreneurship
                and innovation in technology.
              </p>
              <div className="little-title">September 2018 - Present </div>
            </div>
            <br />
            <div className="block">
              <a href={"http://ivey.uwo.ca"}>
                <img className="logos" src={"/images/Ivey.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">IVEY BUSINESS SCHOOL</div>
              <div className="sub-title">
                <i className="fas fa-graduation-cap" /> Bachelor's Degree,
                Honors Business Administration
              </div>
              <p>
                Pursuing a dual degree with Software Engineering and Business at
                Western's Ivey Business School.
              </p>
              <div className="little-title">September 2018 - April 2020 </div>
            </div>
            <br />
            <div className="block">
              <a href={"https://www.scotiabank.com/gls/en/index.html#about"}>
                <img className="logos" src={"/images/scotiabank.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">SCOTIABANK</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Software Engineering Intern{" "}
              </div>
              <p>
                Developed an app (full stack, end-to-end) soon to be released in
                Google Play and App Store.
              </p>
              <div className="little-title">May 2018 - August 2018 </div>
            </div>
            <br />
            <div className="block">
              <a href={"https://iaeste.org"}>
                <img className="logos" src={"/images/iaeste.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">IAESTE CANADA</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> President, Local Chapter{" "}
              </div>
              <p>
                Eestablishing goals for the chapter and creating a plan to meet
                the national goals of the organization.
              </p>
              <div className="little-title">May 2018 - Present </div>
            </div>
            <br />
            <div className="block">
              <a href={"https://www.linkedin.com/company/w5-idea-accelerator/"}>
                <img className="logos" src={"/images/w5.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">W5 ACCELERATOR</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Program Director{" "}
              </div>
              <p>
                Organized mentorship, networking, and funding opportunities to
                ensure the cohort’s success.
              </p>
              <div className="little-title">September 2017 - April 2018 </div>
            </div>
            <br />
            <div className="block">
              <a href={"https://iaeste.org"}>
                <img className="logos" src={"/images/iaeste.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">IAESTE CANADA</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Recruitment Manager{" "}
              </div>
              <p>
                Recruited seven companies and five professors to participate in
                the exchange program.
              </p>
              <div className="little-title">September 2017 - April 2018 </div>
            </div>
            <br />
            <div className="block">
              <a href={"https://www.medlifemovement.org/"}>
                <img className="logos" src={"/images/med.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">MEDLIFE</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Technology Team Lead{" "}
              </div>
              <p>Led the local chapter's technology team.</p>
              <div className="little-title">September 2017 - April 2018 </div>
            </div>
            <br />
            <div className="block">
              <a href={"https://www.eng.uwo.ca/"}>
                <img className="logos" src={"/images/wec.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">WESTERN ENGINEERING COMPETITION</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Recruitment Lead{" "}
              </div>
              <p>
                Recruited a diverse judging panel for all categories of the
                competition.
              </p>
              <div className="little-title">
                September 2017 - February 2018{" "}
              </div>
            </div>
            <br />
            <div className="block">
              <a href={"https://www.girlplusplus.ca"}>
                <img className="logos" src={"/images/girl.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">GIRL++</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Co-founder & President{" "}
              </div>
              <p>
                Co-founded a non-profit organization to empower, educate, and
                guide females with an interest in technology.
              </p>
              <div className="little-title">November 2016 - Present </div>
            </div>
            {/* <br />
            <div className="block">
              <a href={"https://www.eng.uwo.ca/wie/"}>
                <img className="logos" src={"/images/wing.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">WOMEN IN ENGINEERING</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> Peer Mentor{" "}
              </div>
              <p>
                Leading the local chapter - International Association for the
                Exchange of Students for Technical Experience
              </p>
              <div className="little-title">September 2016 - April 2018 </div>
            </div> */}
            <br />
            <div className="block">
              <a href={"http://worldofforex.com"}>
                <img className="logos" src={"/images/wof.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">WORLD OF FOREX</div>
              <div className="sub-title">
                <i className="fas fa-briefcase" /> IT ANALYST{" "}
              </div>
              <p>
                Analyzed user behavior data and made recommendations that
                increased user satisfaction by 35%.
              </p>
              <div className="little-title">May 2016 - August 2016</div>
            </div>
            <br />
            <div className="block">
              <a href={"http://uwo.ca"}>
                <img className="logos" src={"/images/uwo.png"} />
              </a>
            </div>
            <div className="block">
              <div className="tagline">WESTERN UNIVERSITY</div>
              <div className="sub-title">
                <i className="fas fa-graduation-cap" /> Bachelor's Degree,
                Software Engineering
              </div>
              <p>
                Entered Western University as an Engineering student awarded the
                Western Excellence scholarship.
              </p>
              <div className="little-title"> September 2015 - April 2020 </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <ScrollToNext pageSelector=".portfolio-page" />
      </div>
    </div>
  );
};

ResumePage.contextTypes = {
  theme: PropTypes.any
};

export default ResumePage;
