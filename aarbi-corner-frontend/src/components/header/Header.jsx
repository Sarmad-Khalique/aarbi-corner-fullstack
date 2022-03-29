import React, { useContext } from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/CartIcon";

import CartDropdown from "../cart-dropdown/CartDropdown";

import {
  HamContainer,
  HeaderContainer,
  LogoContainer,
  LogoImage,
  OptionsContainer,
  LinkOption,
  Line,
} from "./Header.styles";

import { CartContext } from '../../context/provider/cart/cart.provider';
import { UserContext } from '../../context/provider/user/user.provider';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {userLoggedIn, logoutUser} = useContext(UserContext);
  
  const {hidden} = useContext(CartContext);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage />
        </Link>
        <HamContainer onClick={() => setMenuOpen(!menuOpen)}>
          <Line />
          <Line />
          <Line />
        </HamContainer>
      </LogoContainer>
      <OptionsContainer
        menuOpen={menuOpen}
        className={`${menuOpen ? "options-open" : ""}`}
      >
        <LinkOption onClick={() => setMenuOpen(!menuOpen)} to="/shop">
          SHOP
        </LinkOption>
        <LinkOption onClick={() => setMenuOpen(!menuOpen)} to="/shop">
          CONTACT
        </LinkOption>
        {userLoggedIn ? (
          <LinkOption as="div" onClick={() => logoutUser()}>
            SIGN OUT
          </LinkOption>
        ) : (
          <LinkOption onClick={() => setMenuOpen(!menuOpen)} to="/signin">
            SIGN IN
          </LinkOption>
        )}
        <LinkOption as="div" onClick={() => setMenuOpen(!menuOpen)}>
          <CartIcon />
        </LinkOption>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
