import styled from '@emotion/styled';
import {
  BG_GREEN_COLOR,
  MAIN_LIGHT_COLOR,
  HABIT_TEXT_COLOR,
} from '../../ui/colors';

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;

  .custom-input {
    width: 100%;
  }
  .react-datepicker-popper {
    width: 100%;
  }
  .react-datepicker {
    background: #f0f0f0;
    box-shadow: 0px 6px 26px rgba(24, 28, 39, 0.1);
    width: 100%;
  }
  .react-datepicker__header {
    background-color: #${MAIN_LIGHT_COLOR};
  }
  .react-datepicker__triangle,
  .react-datepicker__triangle::before {
    display: none;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container {
    width: 100%;
  }
  .react-datepicker__day,
  .react-datepicker__day-name {
    width: 2.4rem;
  }
  .react-datepicker__day:hover {
    background-color: #${BG_GREEN_COLOR};
    color: #${MAIN_LIGHT_COLOR};
  }
  .react-datepicker__day--selected {
    background-color: #${BG_GREEN_COLOR};
    color: #${MAIN_LIGHT_COLOR};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #${BG_GREEN_COLOR};
    color: #${MAIN_LIGHT_COLOR};
  }
  .calendar {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    width: 20px;
    height: 20px;
    fill: #${HABIT_TEXT_COLOR};
  }
  .active-calendar {
    fill: #${BG_GREEN_COLOR};
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    display: block;
    width: 100%;
  }
`;
