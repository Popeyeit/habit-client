import styled from '@emotion/styled';
import { BG_GREEN_COLOR } from '../../ui/colors';
import { device } from '../../helpers/media';
export const Section = styled.section`
  background-color: #${BG_GREEN_COLOR};
  background-size: cover;
  min-height: 100vh;
  padding: 40px 0 70px 0;
  @media ${device.tablet} {
    padding: 100px 0 400px 0;
  }
  @media ${device.laptopL} {
    padding: 140px 0 294px 0;
  }
`;
