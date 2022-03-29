import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CollectionTitleContainer = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  margin: 1rem 0;
  padding: 0.5rem 0;
`;

export const CollectionTitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;
