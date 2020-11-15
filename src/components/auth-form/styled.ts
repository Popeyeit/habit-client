import styled from '@emotion/styled';
import { VALIDATE_RED_COLOR } from '../../ui/colors';

import { device } from '../../helpers/media';

export const Label = styled.label`
  width: 100%;
  margin-bottom: 30px;
  max-height: 44px;
  @media${device.tablet} {
    width: 345px;
    margin-bottom: 20px;
  }

  &.with-bg {
    @media${device.tablet} {
      margin-bottom: 40px;
    }
    position: relative;

    &::after {
      position: absolute;
      content: '';
      background: url(/img/icons/input_password.svg) no-repeat;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
      height: 12px;
      width: 20px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #${VALIDATE_RED_COLOR};
  font-size: 14px;
`;

export const BtnFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 220px;
`;
