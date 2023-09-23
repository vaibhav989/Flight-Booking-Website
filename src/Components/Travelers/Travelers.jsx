import React, { useEffect } from "react";
import paris from "../../assets/paris.png";
import dubai from "../../assets/dubai.png";
import london from "../../assets/london.png";
import newyork from "../../assets/newyork.png";
import traveler1 from "../../assets/user1.png";
import traveler2 from "../../assets/user2.png";
import traveler3 from "../../assets/user3.png";
import traveler4 from "../../assets/user4.png";
import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "TechIsra",
    socialLink: "@isratech1",
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "John Wilson",
    socialLink: "@johnwilson1",
  },
  {
    id: 3,
    destinationImage: london,
    travelerImage: traveler3,
    travelerName: "Andrew Lindsey",
    socialLink: "@i.andrew",
  },
  {
    id: 4,
    destinationImage: newyork,
    travelerImage: traveler4,
    travelerName: "micheal",
    socialLink: "@micheal8",
  },
];

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS with your desired duration
  }, []);

  return (
    <div
      className="travelers container section"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="sectionContainer">
        <h2>Top Travelers of this month!</h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img
                    src={destinationImage}
                    className="destinationImage"
                    alt="destination"
                  />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img
                        src={travelerImage}
                        alt="person"
                        className="travelerImage"
                      />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
