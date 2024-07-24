import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Hambermenuoptions.css";
import { generalpics, menupics } from "../../assets/pictures/pictures";
import { icons } from "../../assets/icons/icons";
import Footer from "../Footer/Footer";

const Hambermenuoptions = ({ setopt }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setopt(false);
  };

  return (
    <>
      <div className="hamber-menu">
        <div className="hamber-menu-image">
          <a href="#">
            {" "}
            <img src={generalpics.scanme_img} alt="afterlife" />{" "}
          </a>
        </div>
        <div className="hamber-menu-options">
          <div className="hamber-menu-options-home">
            <img
              onClick={() => handleNavigation("/")}
              src={icons.home_icon}
              alt="home"
            />
            <p onClick={() => handleNavigation("/")}>Home</p>
          </div>
          <div className="hamber-menu-options-cart">
            <img
              onClick={() => handleNavigation("/added-items")}
              src={icons.pallet_icon}
              alt="pallet_icon"
            />
            <p onClick={() => handleNavigation("/added-items")}>Go to Pallet</p>
          </div>
          <div className="hamber-menu-options-about-res">
            <img src={icons.about_us_icon} alt="aboutus" />
            <p onClick={() => handleNavigation("/about-restaurant")}>About Us</p>
          </div>
          
          <button
            className="hamber-menu-go-back-button-option"
            onClick={() => setopt(false)}
          >
            close
          </button>
          <footer>
          <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Hambermenuoptions;