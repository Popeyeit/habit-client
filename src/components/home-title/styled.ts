import styled from '@emotion/styled';
import { MAIN_LIGHT_COLOR } from '../../ui/colors';
import { device } from '../../helpers/media';

export const TitleWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  color: #${MAIN_LIGHT_COLOR};
  margin-bottom: 54px;
  text-align: center;
  @media ${device.tablet} {
    max-width: 630px;
    margin-bottom: 60px;
    text-align: left;
  }
  @media ${device.laptopL} {
    max-width: 720px;
    margin-bottom: 85px;
    &::before {
      content: '';
      position: absolute;
      top: -127px;
      left: 0;
      width: 353px;
      height: 351px;
      background: url(/img/home/noting.svg) no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0px;
      width: 328px;
      height: 297px;
      background: url(/img/home/pray_laptop.svg) no-repeat;
    }
  }
`;

export const Title = styled.h1`
  font-family: Rubik;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 10px;
  width: 100%:
  color: #${MAIN_LIGHT_COLOR};
  @media ${device.tablet} {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 12px;
  }
`;

export const Artist = styled.p`
  font-family: Rubik;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #${MAIN_LIGHT_COLOR};
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 19px;
  }
`;
