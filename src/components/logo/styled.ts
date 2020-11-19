import styled from '@emotion/styled';
import { device } from '../../helpers/media';

export const WrapperLogo = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  &.mb-form {
    margin-bottom: 40px;
  }
  @media ${device.tablet} {
    margin-bottom: 50px;
    &.mb-form {
      margin-bottom: 60px;
    }
  }
  &.custom-mb {
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
  width: 146px;
  @media ${device.tablet} {
    width: 204px;
  }
  &.sm {
    width: 146px;
  }
`;
