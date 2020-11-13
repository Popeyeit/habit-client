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
    .marginBottom {
      margin-bottom: 0px;
    }
  }
`;
