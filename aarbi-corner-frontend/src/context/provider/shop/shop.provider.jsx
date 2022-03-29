import axios from "axios";
import React, { createContext, useState } from "react";

import { getCollectionByTitle } from "./shop.utils";

export const ShopContext = createContext({
  collections: [],
  fetchingCollection: () => {},
  isFetching: true,
});

const ShopProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCollectionFetched, setIsCollectionFetched] = useState(false);

  const baseUrl = "http://localhost:8000";

  const collectionToMap = (collections) => {
    return collections.map((collection) => {
      return {
        ...collection,
        routeName: encodeURI(`shop/${collection.title.toLowerCase()}`),
      };
    });
  };

  const fetchingCollection = async () => {
    const response = await axios.get(`${baseUrl}/api/collections/`);
    setCollections(collectionToMap(response.data));
    setIsLoading(false);
    setIsCollectionFetched(true);
  };

  return (
    <ShopContext.Provider
      value={{
        collections,
        fetchingCollection,
        getCollectionByTitle,
        isLoading,
        isCollectionFetched
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
