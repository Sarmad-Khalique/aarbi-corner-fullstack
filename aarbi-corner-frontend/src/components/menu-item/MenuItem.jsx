import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  ContentSubtitle,
  ContentTitle,
  MenuItemBackground,
  MenuItemContainer,
  ContentContainer,
} from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, routeName, match }) => {
  const history = useHistory();

  return (
    <MenuItemContainer
      onClick={() => history.push(`${match.path}${routeName}`)}
      style={size ? { height: "18rem" } : null}
    >
      <MenuItemBackground imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
