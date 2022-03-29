import React, { useContext } from "react";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import {
  CartIconContainer,
  ShoppingBagContainer,
  CartItemCount,
} from "./CartIcon.styles";

import { CartContext } from "../../context/provider/cart/cart.provider";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => toggleHidden()}>
      <ShoppingBagContainer>
        <Icon />
      </ShoppingBagContainer>
      <CartItemCount>{cartItemsCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
