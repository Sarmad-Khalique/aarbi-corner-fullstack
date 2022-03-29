import React, { useContext } from "react";

import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";

import {
  CartDropdownContainer,
  CloseButton,
  CloseButtonContainer,
  CartItemsContainer,
  EmptyCartContainer,
} from "./CartDropdown.styles";

import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/provider/cart/cart.provider";

const CartDropdown = () => {
  const history = useHistory();

  const {toggleHidden, cartItems} = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CloseButtonContainer onClick={() => toggleHidden()}>
        <CloseButton />
      </CloseButtonContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyCartContainer>Your Cart is Empty</EmptyCartContainer>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleHidden();
        }}
      >
        Checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
