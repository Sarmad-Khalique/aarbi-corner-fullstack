import React from 'react'
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
} from "./CartItem.styles";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <CartItemDetailsContainer>
        <span>{name}</span>
        <span>
          {price} x {quantity}
        </span>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
