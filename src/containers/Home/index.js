/*
* Home - Main application container
*/

import React from "react";
import DraggableLines from "../../components/DraggableLines";
import Notification from "../../components/Notification"
import "./index.css";
import logo from '../../images/logo.svg'

// String of characters which will be passed into the component as prop
const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";

const Home = () => {
  return (
    <div className="Home">
      <img className="logo" src={logo} alt="Turbulent logo" />
      <div className="row">
        <div className="lines">
          <DraggableLines text={text} maxLength="80" />
        </div>
        <div className="notification">
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default Home;