import React from "react";
import Header from "./Header";
import Particles from "react-tsparticles";
import { Hidden } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <div id="home" style={{ backgroundColor: "black" }}>
        <Header />
        <Hidden xsDown>
          <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: "#000000",
                },
              },
              particles: {
                number: {
                  value: 25,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                links: {
                  color: {
                    value: "#ffffff",
                  },
                  enable: true,
                  opacity: 0.4,
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0.5,
                    color: "#000000",
                  },
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 2,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false,
                  },
                },

                move: {
                  enable: true,
                  speed: 1,
                  direction: "bottom-right",
                  random: false,
                  straight: true,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: false,
              pauseOnOutsideViewport: false
            }}
          />
        </Hidden>
      </div>
    </>
  );
};

export default Home;
