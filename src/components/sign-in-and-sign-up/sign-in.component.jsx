import React from "react";
import "./sign-in.styles.scss";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp></SignUp>
    </div>
);

export default SignInSignUp;