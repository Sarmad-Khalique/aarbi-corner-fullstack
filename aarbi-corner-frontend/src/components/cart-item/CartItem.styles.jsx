import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 10rem;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    height: 5rem;
  }
`;

export const CartItemImage = styled.img`
  width: 40%;
  padding: 1rem;
`;

export const CartItemDetailsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1.25rem;
`;
