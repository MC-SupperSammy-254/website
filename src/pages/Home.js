import React from 'react';
import { Link } from "react-router-dom";
import BackImage from "../assets/images/pic56.webp";
import "../styles/Home.css";

function Home() {
  return (
      <div className='home'>
          <div className='backgroundImg' style={{ backgroundImage: `url(${BackImage})` }}></div>
          <div className='headerContainer'>
              <h1>!MC_Supersammy_254 All The WAy!</h1>
              <h2>For Legitimate Emceee</h2>
              <span>&</span>
              <h3>Event Mastery Services</h3>
              <Link to="/footer">
                  <button className='btnHome'>Let's Connect Now</button>
              </Link>
          </div>
      </div>
  )
}


export default Home
