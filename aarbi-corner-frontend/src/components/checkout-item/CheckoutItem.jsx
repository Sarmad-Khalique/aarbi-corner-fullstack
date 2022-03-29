import React, { useContext } from "react";

import { CartContext } from "../../context/provider/cart/cart.provider";


import {
  CheckoutItemContainer,
  ItemDescriptionContainer,
  ItemImageContainer,
  CheckoutItemImage,
  ItemTextContainer,
  ItemName,
  ItemRemove,
  QuantityContainer,
  QuantityArrows,
  Quantity,
  PriceContainer,
} from "./Checkout.styles";

const CheckoutItem = ({ cartItem }) => {
  const { removeItem, addItem, clearItem } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ItemDescriptionContainer>
        <ItemImageContainer>
          <CheckoutItemImage src={imageUrl} alt="cart Item" />
        </ItemImageContainer>
        <ItemTextContainer>
          <ItemName> {name}</ItemName>
          <ItemRemove onClick={() => clearItem(cartItem)}>Remove</ItemRemove>
        </ItemTextContainer>
      </ItemDescriptionContainer>

      <QuantityContainer>
        <QuantityArrows onClick={() => removeItem(cartItem)}>
          &lt;
        </QuantityArrows>
        <Quantity className="quantity">{quantity}</Quantity>
        <QuantityArrows onClick={() => addItem(cartItem)}>&gt;</QuantityArrows>
      </QuantityContainer>
      <PriceContainer>
        <span>{price}</span>
      </PriceContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
