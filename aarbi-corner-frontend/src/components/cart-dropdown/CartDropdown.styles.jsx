import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";
import { ReactComponent as Close } from "../../assets/x.svg";

export const CartDropdownContainer = styled.div`
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 1.25rem;
  top: 0px;

  @media ${device.tablet} {
    width: 15rem;
    height: 24rem;
    right: 2.5rem;
    top: 9rem;
  }
`;

export const CloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  @media ${device.tablet} {
    display: none;
  }
`;

export const CloseButton = styled(Close)`
  background-color: #000;
  color: #fff;
  border-radius: 5px;
`;

export const CartItemsContainer = styled.div`
  height: 80%;
  overflow-y: scroll;
`;

export const EmptyCartContainer = styled.div`
  text-align: center;
`;
