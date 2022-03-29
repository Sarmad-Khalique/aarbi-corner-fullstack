import React, { useContext } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";

import { ShopPageContainer } from "./Shop.styles";

import { ShopContext } from "../../context/provider/shop/shop.provider";
import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverview.container";
import CollectionPageContainer from "../collection/CollectionPage.container";

const Shop = ({match}) => {
  const {fetchingCollection} = useContext(ShopContext);

  useEffect(() => {
    console.log("Shop Rendered");
    fetchingCollection();
  }, [])
  

  return (
    <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionName`}
          component={CollectionPageContainer}
        />

    </ShopPageContainer>
  );
};

export default Shop;
