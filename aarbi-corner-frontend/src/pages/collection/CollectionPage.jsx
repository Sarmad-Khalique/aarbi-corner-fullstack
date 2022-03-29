import React, { useContext } from "react";

import CollectionItem from "../../components/collection-item/CollectionItem";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemContainer,
} from "./CollectionPage.styles";
import { useParams } from "react-router-dom";

import { ShopContext } from "../../context/provider/shop/shop.provider";

const CollectionPage = () => {
  const { collections, getCollectionByTitle } = useContext(ShopContext);
  const urlParams = useParams();

  const collection = getCollectionByTitle(
    collections,
    urlParams.collectionName
  );

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
