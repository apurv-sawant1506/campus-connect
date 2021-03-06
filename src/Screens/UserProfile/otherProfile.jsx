import React, { useState } from "react";

import PersonalDetails from "../../Components/PersonalDetails/personalDetails";
import CollegeDetails from "../../Components/CollegeDetails/collegeDetails";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import UserBio from "../../Components/UserBio/userBio";
import MainChat from "../Chat/mainChat";
import "./userProfile.css";
import "./about.css";
import FollowersAndFollowingList from "../../Components/FollowersList/followers";
import Highlights from "./../../Components/Highlights/highlights";
import PhotosTab from "../../Components/PhotosTab/photosTab";

const OtherProfile = (props) => {
  //   let userName = props.match.params.userName;
  // if (props.user.userName )
  let user = props.user;

  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <div className="userProfile">
        <div className="profile__section">
          <ProfileHeader user={user} currentUser={props.currentUser} />
          <ProfileTabs setCurrentTab={setCurrentTab} />
          <div className="profile__content">
            {currentTab === 0 ? (
              <div className="about">
                <UserBio bio={user.bio} />
                <div className="details">
                  <PersonalDetails personalDetails={user.personalDetails} />
                  <CollegeDetails collegeDetails={user.collegeDetails} />
                </div>
                <Highlights />
              </div>
            ) : null}

            {currentTab === 1 ? <PhotosTab userName={user.userName} /> : null}
            {currentTab === 2 ? (
              <FollowersAndFollowingList people={user.followers} />
            ) : null}
            {currentTab === 3 ? (
              <FollowersAndFollowingList people={user.following} />
            ) : null}
          </div>
        </div>
        {currentTab === 0 ? (
          <div className="stats">
            <div className="views">
              <p className="number">80</p>
              <p>Views</p>
            </div>
            <div className="search">
              <p className="number">80</p>
              <p>Searches</p>
            </div>
            <div className="popularity">
              <p className="number">9/10</p>
              <p>Popularity Index</p>
            </div>
          </div>
        ) : null}
        <MainChat />
      </div>
    </>
  );
};

export default OtherProfile;
