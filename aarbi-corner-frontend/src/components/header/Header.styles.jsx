import styled from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { device } from "../../utils/devices/devices.styles";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 2.5rem;
  position: relative;
  @media ${device.tablet} {
    height: 12rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    width: 12rem;
  }
`;

export const LogoImage = styled(Logo)`
  width: 7rem;
  height: 7rem;

  @media ${device.tablet} {
    width: 8rem;
    height: 8rem;
  }
`;

export const HamContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translate(-5%, -50%);
  z-index: 3;
  cursor: pointer;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Line = styled.div`
  width: 30px;
  height: 3px;
  background: #000;
  margin: 5px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding: 2rem 0rem;
  z-index: 2;
  font-size: 18px;
  font-weight: 600;
  background: white;
  clip-path: circle(0px at 90% -10%);
  transition: all 0.5s ease-out;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    position: relative;
    width: auto;
    height: 100%;
    clip-path: none;
    -webkit-clip-path: none;
    padding: 0 0;
  }
`;

export const LinkOption = styled(Link)`
  padding: 1rem 0.75rem;
  text-decoration: none;
  cursor: pointer;
  color: #000;
`;
