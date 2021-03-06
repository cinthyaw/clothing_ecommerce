import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGooglesignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? "inverted": ""} ${isGooglesignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;