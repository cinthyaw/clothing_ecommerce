import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss"

const Cart = ()=> (
    <div className="cart-dropdown">
        <div class className="cart-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default Cart;