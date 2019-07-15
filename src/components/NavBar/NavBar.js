import React from "react";
import "./styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        ref={elem => {
          this.nav = elem;
        }}
      >
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid;
            }
          `}
        </style>
        <div className="menu">
          <div className="menu__item active">About</div>
          <div className="menu__item">Portfolio</div>
          <div className="menu__item active">Timeline</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
