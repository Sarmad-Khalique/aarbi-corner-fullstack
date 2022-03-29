import React, { useContext } from "react";
import WithSpinner from "../with-spinner/WithSpinner";
import CollectionOverview from "./CollectionOverview";

import { ShopContext } from "../../context/provider/shop/shop.provider";

const CollectionOverviewContainer = () => {
  const { isLoading } = useContext(ShopContext);
  const CollectioinOverviewWithSpinner = WithSpinner(CollectionOverview);
  return <CollectioinOverviewWithSpinner isLoading={isLoading} />;
};

export default CollectionOverviewContainer;
