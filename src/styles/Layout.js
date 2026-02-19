import styled from "styled-components";
import { device } from "./breakpoints";

export const Container = styled.div`
  width: 100%;
  margin: auto;

  max-width: 1400px;
  padding: 0 clamp(1rem, 4vw, 3rem);

  @media ${device.desktopXL} {
    max-width: 1600px;
  }

  @media ${device.ultraWide} {
    max-width: 1800px;
  }

  @media ${device.mobile} {
    padding: 0 1.2rem;
  }
`;
