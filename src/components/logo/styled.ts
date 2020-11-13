import styled from '@emotion/styled';
import { device } from '../../helpers/media';

export const WrapperLogo = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 50px;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
  width: 146px;
   @media ${device.tablet} {
    width: 204px;
   
`;
