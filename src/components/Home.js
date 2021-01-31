import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "./Button";
import studyhunt from "../Assets/homestudyhunt.png";
import Lottie from 'react-lottie';
import HomeAnime from "../Lottie/home.json";

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeCard">
        <div className="HomeHeader">
                 <img className="Logo" src={studyhunt} alt="studyhunt" />
            <div className="HomeHeading">
            <p>Your class is only a <span className="HeaderSpan"> click away...</span></p>
          </div>
          <div className="HomeButton">
            <Link to="/Instructor">
              <Button buttonName="homeButton" label="Instructor" />
            </Link>
            <Link to="/Student">
              <Button buttonName="homeButton" label="Student" />
            </Link>
          </div>
        </div>
        <div className="HomeBody">
         
        
          <div className="Homesvg">
            <Lottie options={{ animationData: HomeAnime, }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

