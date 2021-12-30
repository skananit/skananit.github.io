import React from "react";
import "./styles.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Fade } from "react-reveal";

class ContactPage extends React.Component {
  render() {
    return (
      <Fade big>
        <div className="flex-center flex-direction-col">
          <div className="flex-center flex-row margin-top-40">
            <h1 className="text-center margin-0 title-font line-height-1 letter-spacing-normal">
              Let's Connect
            </h1>
          </div>
          <p className="text-center font-weight-100 margin-0 description-font padding-right-80 padding-left-80">
            <br />I love exchanging stories with other engineers, product
            managers, or designers. I also get inspired by creatives outside of
            tech and would love to chat. Please feel free to reach out!
          </p>
          <SocialIcons />
          <img
            src={"/images/10.png"}
            style={{ width: "100px", marginBottom: "40px" }}
          ></img>
        </div>
      </Fade>
    );
  }
}
export default ContactPage;
