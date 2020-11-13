import styled from '@emotion/styled';
import { device } from '../../helpers/media';
const ContainerStyle = styled.div`
  padding: 0 20px;
  max-width: 600px;
  margin: 0 auto;
  @media ${device.tablet} {
    position: relative;
    max-width: 658px;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.laptopL} {
    max-width: 1420px;
  }
`;

export default ContainerStyle;
