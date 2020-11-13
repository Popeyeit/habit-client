import styled from '@emotion/styled';
import { MAIN_LIGHT_COLOR } from '../../ui/colors';
import { device } from '../../helpers/media';

export const BtnWrapper = styled.div`
  width: 220px;
  margin: 0 auto;
  .marginBottom {
    margin-bottom: 10px;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    width: 455px;

    &::before {
      content: '';
      position: absolute;
      bottom: -293px;
      left: 14px;
      width: 270px;
      height: 244px;
      background: url(/img/home/pray.svg) no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -357px;
      right: -14px;
      width: 330px;
      height: 280px;
      background: url(/img/home/eating.svg) no-repeat;
    }

    .marginBottom {
      margin-bottom: 0px;
    }
  }
  @media ${device.laptopL} {
    &::before {
      content: '';
      position: absolute;
      bottom: -260px;
      left: 40px;
      width: 461px;
      height: 456px;
      background: url(/img/home/reading.svg) no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -230px;
      right: 0px;
      width: 442px;
      height: 375px;
      background: url(/img/home/eating_laptop.svg) no-repeat;
    }
  }
`;
