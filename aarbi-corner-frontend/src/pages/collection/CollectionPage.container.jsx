import WithSpinner from "../../components/with-spinner/WithSpinner";

import CollectionPage from "./CollectionPage";

import React, {useContext} from 'react';
import { ShopContext } from "../../context/provider/shop/shop.provider";

const CollectionPageContainer = () => {
  const {isCollectionFetched} = useContext(ShopContext)

  const CollectionPageWithSpinner = WithSpinner(CollectionPage);
  return <CollectionPageWithSpinner isLoading={!isCollectionFetched} />
}

export default CollectionPageContainer;
