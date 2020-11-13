import styled from '@emotion/styled';
import { MAIN_LIGHT_COLOR } from '../../ui/colors';
import { device } from '../../helpers/media';

export const WelcomeWrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  font-family: Rubik;
  text-align: center;
  color: #${MAIN_LIGHT_COLOR};
  margin-bottom: 10px;
  @media ${device.tablet} {
    width: 405px;
    margin-bottom: 48px;
  }
`;

export const Welcome = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 10px;
  @media ${device.tablet} {
    line-height: 31px;
    font-size: 26px;
  }
`;

export const WelcomeAuth = styled.p`
  font-size: 16px;
  line-height: 19px;
  @media ${device.tablet} {
    line-height: 25px;
    font-size: 18px;
  }
`;
