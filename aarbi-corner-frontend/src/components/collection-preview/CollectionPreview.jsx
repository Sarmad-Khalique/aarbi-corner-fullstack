import React from 'react'

import CollectionItem from "../collection-item/CollectionItem";
import {
  CollectionPreviewContainer,
  CollectionTitleContainer,
  CollectionTitleLink,
} from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items, routeName }) => {
  items = items.length > 4 ? items.slice(1, 5) : items;
  return (
    <div className="collection-group">
      <CollectionTitleContainer>
        <CollectionTitleLink to={`/${routeName}`}>
          {title.toUpperCase()}{" "}
        </CollectionTitleLink>
      </CollectionTitleContainer>
      <CollectionPreviewContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPreviewContainer>
    </div>
  );
};

export default CollectionPreview;
