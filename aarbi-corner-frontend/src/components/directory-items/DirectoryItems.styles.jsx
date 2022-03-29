import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";

export const DirectoryItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
