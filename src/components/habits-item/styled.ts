import styled from '@emotion/styled';
import { MAIN_LIGHT_COLOR } from '../../ui/colors';
import colors from '../../data/colorsHabit';

export const Item = styled.li`
  border-left: 8px solid red;
  position: relative;
  max-width: 45vw;
  background-color: #${MAIN_LIGHT_COLOR};
  border-radius: 10px;
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1.875rem;
  }
  .settings {
    cursor: pointer;
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px;
    background: center no-repeat url(/img/habits/settings.svg);
  }

  &:nth-of-type(1n) {
    border-left: 8px solid ${colors[0]};
  }
  &:nth-of-type(2n) {
    border-left: 8px solid ${colors[1]};
  }
  &:nth-of-type(3n) {
    border-left: 8px solid ${colors[2]};
  }
  &:nth-of-type(4n) {
    border-left: 8px solid ${colors[3]};
  }
  &:nth-of-type(5n) {
    border-left: 8px solid ${colors[4]};
  }
  &:nth-of-type(6n) {
    border-left: 8px solid ${colors[5]};
  }
`;

export const Settings = styled.button`
  border: none;
  background-color: transparent;
`;
