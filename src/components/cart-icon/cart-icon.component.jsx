import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon } from  "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { tooggleCartHidden } from "../../redux/cart/cart.action";



const CartIcon = ({ tooggleCartHidden })=>(
    <div className="cart-icon" onClick={tooggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    tooggleCartHidden: () => dispatch(tooggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);