import React, { useContext } from 'react'
import { CartContext } from '../../context/provider/cart/cart.provider';

import {
  CollectionItemContainer,
  FooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./CollectionItem.styles";

const CollectionItem = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <FooterContainer>
        <NameContainer>
          {name.length > 50
            ? name.slice(0, 50).toUpperCase() + "..."
            : name.toUpperCase()}
        </NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </FooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
