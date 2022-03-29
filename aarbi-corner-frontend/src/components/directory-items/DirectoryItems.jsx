import React, { useContext } from "react";
import { DirectoryContext } from "../../context/provider/directory/directory.provider";
import MenuItem from "../menu-item/MenuItem";

import { DirectoryItemsContainer } from "./DirectoryItems.styles";

const DirectoryItems = () => {
  const { sections } = useContext(DirectoryContext);

  return (
    <DirectoryItemsContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryItemsContainer>
  );
};

export default DirectoryItems;
