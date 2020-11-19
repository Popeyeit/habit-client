import styled from '@emotion/styled';
import { TEXT_DARK_COLOR, HABIT_TEXT_COLOR } from '../../ui/colors';
export const HabitsWrapper = styled.div`
  width: 250px;
  font-family: Rubik;
  margin: 0 auto;
  padding: 30px 0 35px 0;
`;

export const HabitTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #${TEXT_DARK_COLOR};
  margin-bottom: 20px;
`;

export const HabitsList = styled.ul`
  list-style: none;
  overflow: auto;
  height: 200px;
  margin-bottom: 20px;
`;

export const HabitItem = styled.li`
  position: relative;
  font-size: 14px;
  line-height: 17px;
  padding-left: 28px;
  color: #${HABIT_TEXT_COLOR};
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${prop => prop.color};
  }
`;
