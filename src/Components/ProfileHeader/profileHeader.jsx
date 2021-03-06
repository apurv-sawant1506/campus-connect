import { Done, Edit, Facebook, GroupAdd, Message } from "@material-ui/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import Profile from "../../Assets/Images/profile_user@2x.png";
import { followUser, unFollowUser } from "../../Services/userService";
import NameForm from "../AboutPageModals/nameForm";
import "./profileHeader.css";

const ProfileHeader = ({
  user,
  updateUserAbout,
  currentUser,
  followUser,
  unFollowUser,
}) => {
  const [name, setName] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    intro: user.intro,
  });
  const [showName, toggleName] = useState(false);
  const handleClose = () => {
    toggleName(!showName);
  };
  const handleBioSubmit = () => {
    console.log(name);
    const {
      followers,
      following,
      groups,
      personalChats,
      posts,
      ...aboutObject
    } = user;
    updateUserAbout({
      ...aboutObject,
      ...name,
    });
    toggleName(false);
  };
  return (
    <div className="profileHeader">
      <img src={user.profilePhotoURL || Profile} alt="profile" />
      <div className="header__info">
        <div className="details">
          <div className="username">
            {user.firstName + " " + user.lastName}
            {updateUserAbout ? (
              <NameForm
                show={showName}
                handleClose={handleClose}
                name={name}
                setName={setName}
                handleSubmit={handleBioSubmit}
              />
            ) : null}
            <div style={{ width: "1rem" }}></div>
            {updateUserAbout ? <Edit onClick={() => toggleName(true)} /> : null}
          </div>
          <div className="bio">{user.intro}</div>
          <div className="college">{user.collegeDetails.collegeName}</div>
        </div>
        <div className="spacer"></div>
        <div className="header__right">
          <div className="icons">
            <Facebook />
            <Facebook />
            <Facebook />
            <Facebook />
          </div>
          {!updateUserAbout ? (
            <>
              <div className="line"></div>
              <div className="connect__buttons">
                <Message />
                {currentUser.following ? (
                  !currentUser.following.includes(user.userName) ? (
                    <GroupAdd
                      onClick={() => {
                        followUser({
                          follower: currentUser.userName,
                          following: user.userName,
                        });
                      }}
                    />
                  ) : (
                    <Done
                      onClick={() => {
                        unFollowUser({
                          follower: currentUser.userName,
                          following: user.userName,
                        });
                      }}
                    />
                  )
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: ({ follower, following }) => {
      let data = { follower, following };
      return dispatch(followUser(data));
    },
    unFollowUser: ({ follower, following }) => {
      let data = { follower, following };
      return dispatch(unFollowUser(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProfileHeader);
