import styled from '@emotion/styled';
import {
  BG_GREEN_COLOR,
  MAIN_LIGHT_COLOR,
  HABIT_TEXT_COLOR,
  BORDER_COLOR,
  TEXT_DARK_COLOR,
} from '../../ui/colors';

export const DatePickerWrapper = styled.div`
  width: 100%;

  .custom-input {
    width: 100%;
  }
  .react-datepicker-popper {
    width: 100%;
  }
  .react-datepicker {
    background: #f0f0f0;
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    border: none;
    border-bottom: 1px solid #${BORDER_COLOR};
    border-radius: 0;
    background-color: #${MAIN_LIGHT_COLOR};
    height: 504px;
  }
  .react-datepicker__header {
    background-color: #${MAIN_LIGHT_COLOR};
    padding-top: 0;
    border-top: none;
    font-size: 14px;
    border-top: 0;
    font-family: Rubik;
    line-height: 17px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom: 1px solid #${BORDER_COLOR};
  }

  .react-datepicker__current-month {
    font-weight: 500;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    text-align: center;
    text-transform: uppercase;
    color: #${HABIT_TEXT_COLOR};
    max-height: 60px;
    padding: 15px 30px;
  }
  .month_wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    border-bottom: 1px solid #${BORDER_COLOR};
    button {
      border: none;
      background-color: transparent;
      font-size: 16px;
      color: #${HABIT_TEXT_COLOR};
    }
    button:hover {
      color: #${BG_GREEN_COLOR};
    }
  }
  .month_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .month_header {
    padding: 2px 8px;
    width: 84px;
    height: 20px;
    border-radius: 5px;
    font-family: Rubik;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #${HABIT_TEXT_COLOR};
  }
  .active {
    background-color: #${BG_GREEN_COLOR};
    color: #${MAIN_LIGHT_COLOR};
  }
  .react-datepicker__triangle,
  .react-datepicker__triangle::before {
    display: none;
  }

  .react-datepicker__month {
    background-color: #${MAIN_LIGHT_COLOR};
    margin: 0;
    padding: 38px 30px;
  }
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .react-datepicker__week:not(:last-child) {
    margin-bottom: 25px;
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
    margin: 0;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #${TEXT_DARK_COLOR};
    width: 30px;
    height: 30px;
  }
  .react-datepicker__day:hover {
    background-color: #${MAIN_LIGHT_COLOR};
    color: #${BG_GREEN_COLOR};
    border: 2px solid #${BG_GREEN_COLOR};
  }
  .react-datepicker__day--selected {
    background-color: #${BG_GREEN_COLOR};
    order: 2px solid #${BG_GREEN_COLOR};
    color: #${MAIN_LIGHT_COLOR};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #${BG_GREEN_COLOR};
    order: 2px solid #${BG_GREEN_COLOR};
    color: #${MAIN_LIGHT_COLOR};
  }

  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    display: block;
    width: 100%;
  }
`;
