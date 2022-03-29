import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/provider/shop/shop.provider";

import CollectionPreview from "../collection-preview/CollectionPreview";

import "./CollectionOverview.styles.css";

const CollectionOverview = () => {
  const { collections } = useContext(ShopContext);

  return (
    <>
      <h1 className="collection">COLLECTIONS</h1>
      <div className="collection-overview">
      {collections.map(({id, ...otherCollectionProps})=><CollectionPreview key={id} {...otherCollectionProps} />)}
      </div>
    </>
  );
};

export default CollectionOverview;
