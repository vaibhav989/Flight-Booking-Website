import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS with your desired duration
  }, []);

  return (
    <div className="footer" data-aos="fade-up" data-aos-duration="2500">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Logo} alt="Logo" className="Logo" />
          </div>
          <p>Your Mind should be stronger than your feelings, fly! </p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <TiSocialTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Explore</a>
          </li>

          <li>
            <a href="">Flight Status</a>
          </li>

          <li>
            <a href="">Travel</a>
          </li>

          <li>
            <a href="">Check-In</a>
          </li>

          <li>
            <a href="">Manage-Your-Booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>

          <li>
            <a href="">How to</a>
          </li>

          <li>
            <a href="">Features</a>
          </li>

          <li>
            <a href="">Travel</a>
          </li>

          <li>
            <a href="">Baggage</a>
          </li>

          <li>
            <a href="">Route-Map</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Chauffuer</a>
          </li>

          <li>
            <a href="">Our partners</a>
          </li>

          <li>
            <a href="">Destination</a>
          </li>

          <li>
            <a href="">Carrers</a>
          </li>

          <li>
            <a href="">Transportation</a>
          </li>

          <li>
            <a href="">Manage-Your-Booking</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          Courtesy Design | Developed by{" "}
          <a
            href="https://www.linkedin.com/in/vaibhav-wadhwa-/"
            target="_blank"
          >
            Flight
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
