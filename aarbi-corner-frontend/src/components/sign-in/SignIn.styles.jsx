import styled from "styled-components";
import { device } from "../../utils/devices/devices.styles";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    min-width: 30vw;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 36px;
  line-height: 40px;
  font-weight: 600;
  margin: 1rem 0;
`;
export const SubtitleContainer = styled.h4`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  padding-bottom: 2rem;
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
