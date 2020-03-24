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
              I love exchanging stories with other engineers, product managers,
              designers, and students.
            </p>
            <p> Feel free to say hi!</p>

            <div className="email">
              {/* <img src="/images/headshot.png" className="headshot" alt="" /> */}
              <div className="email-details">
                <h1 style={{ fontSize: "25px" }}> Shima Kananitodashki</h1>
                <p>shima.kanani.t@gmail.com</p>
              </div>
            </div>
            <p></p>
            <p></p>
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }
}
export default ContactPage;
