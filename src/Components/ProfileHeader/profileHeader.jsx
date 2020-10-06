import { Facebook } from "@material-ui/icons";
import React from "react";
import Profile from "../../Assets/Images/profile_user@2x.png";
import "./profileHeader.css";

const ProfileHeader = () => {
  return (
    <div className="profileHeader">
      <img src={Profile} alt="profile" />
      <div className="header__info">
        <div className="details">
          <p className="username">John Doe</p>
          <p className="bio">
            Upcoming Technology Analyst at Deutsche Bank | General Secretary,
            EPEC
          </p>
          <p className="college">Vishwakarma Institute of Technology, Pune</p>
        </div>
        <div className="spacer"></div>
        <div className="icons">
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
