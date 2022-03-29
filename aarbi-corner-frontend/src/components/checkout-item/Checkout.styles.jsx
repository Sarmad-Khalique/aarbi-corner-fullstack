import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";

export const CheckoutItemContainer = styled.div`
  height: 15rem;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
`;

export const ItemDescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1px;
`;

export const ItemImageContainer = styled.div`
  height: 12rem;
  width: 75%;
  margin-right: 0.25rem;
  @media ${device.tablet} {
    padding: 0.5rem;
    width: 50%;
  }
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemTextContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const ItemName = styled.span`
  margin: 0.75rem 0;
  font-size: 18px;
`;

export const ItemRemove = styled.span`
  color: rgba(255, 0, 0, 0.788);
  line-height: 1rem;
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: center;
`;

export const QuantityArrows = styled.span`
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  font-size: 16px;
  padding: 0 0.25rem;
`;

export const PriceContainer = styled.div`
  text-align: center;
  width: 25%;
`;
