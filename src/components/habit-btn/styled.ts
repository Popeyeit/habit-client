import styled from '@emotion/styled';
import {
  BG_GREEN_COLOR,
  BORDER_GRAY_COLOR,
  MAIN_LIGHT_COLOR,
  TEXT_DARK_COLOR,
  VALIDATE_RED_COLOR,
} from '../../ui/colors';
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6.5vw;
  align-items: center;
`;

export const Button = styled.button`
  width: 2.75vw;
  height: 2.75vw;
  background: #${MAIN_LIGHT_COLOR};
  border: 1px solid #${BORDER_GRAY_COLOR};
  border-radius: 5px;
  .btn {
    display: block;
    stroke: #${TEXT_DARK_COLOR};
    width: 20px;
    height: 20px;
    margin: auto;
    pointer-events: none;
  }
  &.true {
    background: #${BG_GREEN_COLOR};
  }
  .true {
    stroke: #${MAIN_LIGHT_COLOR};
  }

  .false {
    stroke: #${VALIDATE_RED_COLOR};
  }

  &.false {
    border: 1px solid #${VALIDATE_RED_COLOR};
  }

  .not_active {
    border: 1px; solid #${BORDER_GRAY_COLOR};
  }
  & .not_active {
    stroke: #${BORDER_GRAY_COLOR};
  }
`;
