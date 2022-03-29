import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24rem;
  border: 2px solid lightgray;
  position: relative;
  justify-content: center;
  box-shadow: 0 5px 10px -3px #000000;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
`;

export const BackgroundImage = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  height: 95%;
  overflow: hidden;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-cover: cover;
  background-size: cover;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 0 0.5rem;
`;

export const NameContainer = styled.span`
  width: 90%;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
