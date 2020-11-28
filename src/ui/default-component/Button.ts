import styled from '@emotion/styled';
import { MAIN_LIGHT_COLOR, BG_GREEN_COLOR } from '../colors';
export const Button = styled.button`
  border-radius: 5px;
  width: 220px;
  height: 44px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  border: 2px solid #${MAIN_LIGHT_COLOR};
  background-color: transparent;
  color: #${MAIN_LIGHT_COLOR};
  &:hover {
    border: none;
    background-color: #${MAIN_LIGHT_COLOR};
    color: #${BG_GREEN_COLOR};
  }
  &.bg-green {
    background-color: #${BG_GREEN_COLOR};
    border: none;
    margin-bottom: 40px;
    &:hover {
      background-color: transparent;
      border: 2px solid #${BG_GREEN_COLOR};
      color: #${BG_GREEN_COLOR};
    }
  }
  &.to-main {
    background-color: transparent;
    border: 2px solid #${BG_GREEN_COLOR};
    color: #${BG_GREEN_COLOR};
    margin-bottom: 0;
    :hover {
      background-color: #${BG_GREEN_COLOR};
      color: #${MAIN_LIGHT_COLOR};
      border: none;
    }
  }
  &.google {
  }
  &.without_mb {
    margin-bottom: 0;
  }
`;
