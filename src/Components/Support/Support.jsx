import React, { useEffect } from "react";
import gridImage from "../../assets/Images-Grid.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); 
  }, []);

  return (
    <div
      className="support container section"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="sectionContainer">
        <div className="tittlesDiv">
          <small>Travel Support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the journey!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirement to travel Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey!
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img src={gridImage} alt="grid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
