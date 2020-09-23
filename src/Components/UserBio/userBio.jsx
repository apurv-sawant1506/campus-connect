import React from "react";
import "./userBio.css";

const UserBio = () => {
  return (
    <div className="bio">
      <p className="bio__heading">Bio</p>
      <pre className="bio__content">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
      </pre>
    </div>
  );
};

export default UserBio;
