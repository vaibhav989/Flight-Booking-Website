import React, { useEffect } from "react";
import imageGrid from "../../assets/images-Grid2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS with your desired duration
  }, []);

  return (
    <div
      className="lounge container section"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="grid" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help through the Airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care of the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
