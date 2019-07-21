import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "../SocialIcons/SocialIcons";

class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <h1 style={{ color: "white" }}>Contact</h1>
        </div>

        <div className="contact-content">
          <div className="contact-details">
            <h3 style={{ fontSize: "2vw" }}> Let's connect,</h3>
            <p style={{ fontSize: "1vw" }}>
              I love exchanging stories with other product managers, developers,
              designers, and students. Feel free to contact me on Linkedin!
            </p>

            <div className="email">
              <img src="/images/headshot.png" className="headshot" />

              <div className="email-details">
                <h1 style={{ fontSize: "2vw" }}> Shima Kananitodashki</h1>
                <p>shima.kanani.t@gmail.com</p>
                <p>+1 (416) 841 0693</p>
              </div>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }
}
export default ContactPage;
