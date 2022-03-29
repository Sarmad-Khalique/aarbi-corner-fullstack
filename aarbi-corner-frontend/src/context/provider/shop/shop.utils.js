const convertCollectionToMap = (collections) => {
  return collections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCollectionByTitle = (collections, collectionName) => {
  return collections
    ? convertCollectionToMap(collections)[collectionName]
    : null;
};
