import styled from "styled-components";

import { device } from "../../utils/devices/devices.styles";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.div`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const CollectionItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
