import React from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";
import FacebookIcon from "../../Assets/Images/facebook.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import SignUpHome from "../../Components/SignUp/signUpHome";
import "./auth.css";
import SignUpEmail from "../../Components/SignUp/signUpEmail";
import { useState } from "react";
import SignUpPersonalDetails from "../../Components/SignUp/signUpPersonalDetails";
import SignUpCollegeDetails from "../../Components/SignUp/signUpCollegeDetails";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, getUserDetails } from "../../Services/userService";

function SignUp(props) {
  const [pageNo, setPageNo] = useState(0);
  const [signUpData, setSignUpData] = useState({
    email: "",
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    collegeDetails: {
      year: "",
      branch: "",
      collegeName: "VIT",
    },
  });

  function finalSubmitHandler(collegeDetails) {
    props
      .signUp({ ...signUpData, collegeDetails })
      .then((userObject) => {
        props.getUserDetails(userObject.userName);
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="auth__screen">
      <AuthLeft pageNo={pageNo} />
      <div className="auth__right">
        <Route
          exact
          strict
          path="/signUp"
          component={(props) => {
            return <SignUpHome setPageNo={setPageNo} {...props} />;
          }}
        />
        <Route
          exact
          strict
          path="/signUp/1"
          component={(props) => {
            return (
              <SignUpEmail
                setPageNo={setPageNo}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          strict
          path="/signUp/2"
          component={(props) => {
            return (
              <SignUpPersonalDetails
                setPageNo={setPageNo}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          strict
          path="/signUp/3"
          component={(props) => {
            return (
              <SignUpCollegeDetails
                setPageNo={setPageNo}
                signUpData={signUpData}
                setSignUpData={setSignUpData}
                onSubmit={finalSubmitHandler}
                {...props}
              />
            );
          }}
        />
        <div className="auth__right__footer">
          <p>Contact Us</p>
          <img src={FacebookIcon} alt="facebook" />
          <img src={TwitterIcon} alt="twitter" />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (formData) => {
      return dispatch(signUp(formData));
    },
    getUserDetails: (userName, other = false) => {
      return dispatch(getUserDetails(userName, other));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
