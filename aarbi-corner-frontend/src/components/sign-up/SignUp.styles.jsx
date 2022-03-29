import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns:1fr;

    @media ${device.tablet}{
    grid-template-columns:1fr 1fr;
`;
