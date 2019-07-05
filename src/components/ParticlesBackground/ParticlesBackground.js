import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";

// import "./style";

const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 721.533258173619
            }
          },
          color: {
            value: "#606060"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#606060"
            },
            polygon: {
              nb_sides: 4
            },
            image: {
              src: "img/github.svg",
              width: 50,
              height: 50
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 12.18119527978683,
              size_min: 0,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#606060",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

ParticlesBackground.contextTypes = {
  theme: PropTypes.any
};

export default ParticlesBackground;
