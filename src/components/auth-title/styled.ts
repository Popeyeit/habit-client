import styled from '@emotion/styled';
import { TEXT_DARK_COLOR } from '../../ui/colors';
import { device } from '../../helpers/media';
export const TitleWrapper = styled.div`
  text-align: center;
  width: 280px;
  font-family: Rubik;
  font-style: normal;
  color: #${TEXT_DARK_COLOR};
  margin-bottom: 20px;
  @media${device.tablet} {
    width: 405px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 25px;
`;
