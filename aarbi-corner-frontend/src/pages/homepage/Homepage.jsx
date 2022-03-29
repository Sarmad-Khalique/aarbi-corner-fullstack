import React from "react";
import DirectoryItems from "../../components/directory-items/DirectoryItems";

import { HomepageContainer } from "./Homepage.styles";

const Homepage = () => {

  return (
    <HomepageContainer>
      <DirectoryItems />
    </HomepageContainer>
  );
};

export default Homepage;
