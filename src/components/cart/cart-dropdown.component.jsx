import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const Cart = ()=> (
    <div className="cart-dropdown">
        <div class className="cart-items">
            <CartItem />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default Cart;