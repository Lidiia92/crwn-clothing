import React from "react";
import SignIn from "./signin";
import SignUp from "../../components/sign-up/sign-up";

import "./signin.scss";

const SigninContainer = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninContainer;
