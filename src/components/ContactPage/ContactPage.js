import React from "react";
import "./styles.css";
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
            <h3> Let's connect,</h3>

            <p>
              I'm currently finishing up an internship at Scotiabank and
              entering my senior year of university studies. I'd love to chat
              about any opportunities starting in June 2020.
            </p>
            <p>
              I also love exchanging stories with other product managers,
              developers, designers, and students.
            </p>
            <p> Feel free to say hi!</p>
            <div className="email">
              <img src="/images/headshot.png" className="headshot" alt="" />
              <div className="email-details">
                <h1 style={{ fontSize: "25px" }}> Shima Kananitodashki</h1>
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
