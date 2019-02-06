import React from "react";

export default [
  {
    name: "audio-visualizer",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Audio Visualizer</div>
        <div className="portfolio-item__desc">
          Visualize audio data in real time
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <i className="fab fa-js" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/skananit/audio-visualizer"
          >
            <i className="fas fa-external-link-alt" />
            {"  "}
            Code
          </a>
        </div>
      </div>
    )
  },
  {
    name: "selfstart",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Self Start, Body Smart</div>
        <div className="portfolio-item__desc">
          Patient management software for a local physiotherapist
            <br></br>
            in London
          Ontario
        </div>

        <div className="portfolio-item__icon">
          <i className="fab fa-ember" />
          <i className="fab fa-js" />
          <i className="fab fa-node" />
        </div>
        <div className="portfolio-item__links">

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=nUiOFurz1N0"
          >
            <i className="fas fa-external-link-alt" /> {"  "}
            Product Demo
          </a>
          {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com//typy">More</a> */}
        </div>
      </div>
    )
  },
  {
    name: "location",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Geolocation & Geofencing</div>
        <div className="portfolio-item__desc">
          Location features used hand in hand to either restrict users from an
          app's features or reward them
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <i className="fab fa-js" />
          <i className="fab fa-node" />
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="shimakanani.com">
            <i className="fas fa-external-link-alt" /> {"  "}
            Code
          </a>
        </div>
      </div>
    )
  },

  {
    name: "chit-chat-app",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Chatroom Application</div>
        <div className="portfolio-item__desc">
            Multithreaded client/server chatroom application allows multiple users to chat in one room.
            <br></br>(Written in Java)
        </div>
        <div className="portfolio-item__icon">{"  "} </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/skananit/chit-chat-app"
          >
            <i className="fas fa-external-link-alt" />
            {"  "}
            Code
          </a>
        </div>
      </div>
    )
  },
  {
    name: "portfolio",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Portfolio Website</div>
        <div className="portfolio-item__desc">
          Simple portfolio website hosted on GitHub Pages
            <br></br>(Demoed right here!) <br></br>
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <i className="fab fa-js" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/skananit/skananit.github.io"
          >
            <i className="fas fa-external-link-alt" /> {"  "}
            Code
          </a>
        </div>
      </div>
    )
  },
  {
    name: "db-management-system",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Blood Donation Management System
        </div>
        <div className="portfolio-item__desc">
          Database management tool to enhance blood donors’ donation experience
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-angular" />
          <i className="fab fa-js" />
          <i className="fab fa-node" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/skananit/blood-donation-management-system"
          >
            <i className="fas fa-external-link-alt" />
            {"  "}
            Code
          </a>
        </div>
      </div>
    )
  }
];
