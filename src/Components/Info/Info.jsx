import React, { useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { BsShieldCheck, BsFillBookmarkCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); 
  }, []);

  return (
    <div className="info section" data-aos="fade-up" data-aos-duration="2500">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel To make memories all around the world</h2>
          <button className="btn">view All</button>
        </div>

        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <SlCalender className="icon" />
            </div>

            <span className="cardTitle">Book & Relax</span>
            <p>
              You can also call your airline from your phone and book a flight
              ticket!
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne ">
              <BsShieldCheck className="icon" />
            </div>

            <span className="cardTitle">Smart Checklist</span>
            <p>
              You can also call your airline from your phone and book a flight
              ticket!
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsFillBookmarkCheckFill className="icon" />
            </div>

            <span className="cardTitle">Save More </span>
            <p>
              You can also call your airline from your phone and book a flight
              ticket!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
