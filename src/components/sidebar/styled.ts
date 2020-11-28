import styled from '@emotion/styled';
import { BORDER_COLOR } from '../../ui/colors';
export const Section = styled.section`
  width: 23.625vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-height: 818px;
  position: sticky;
  top: 0;
`;
export const NavWrapper = styled.div`
  border-bottom: 1px solid #${BORDER_COLOR};
  width: 100%;
  display: flex;
  align-items: center;
`;
