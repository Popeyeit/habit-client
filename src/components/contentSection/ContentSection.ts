import styled from '@emotion/styled';
import { BG_GRAY_COLOR, BORDER_COLOR } from '../../ui/colors';

export default styled.section`
  background-color: #${BG_GRAY_COLOR};
  background-size: cover;
  // width: calc(100% - 378px * 2);
  width: calc(100% - 23.625vw * 2);
  border-right: 1px solid #${BORDER_COLOR};
  border-left: 1px solid #${BORDER_COLOR};
  min-height: 100vh;
  padding: 60px 20px;
`;
