import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar';
import HabitBtn from '../habit-btn/HabisBtn';
import { IProps } from '../../interfaces/habits.interface';
import * as styled from './styled';

interface IDate {
  date: number;
  isDone: 'yes' | 'no' | 'nothing';
}

const HabitsItem = ({
  result,
  title,
  onDoneHabit,
  okRef,
  cancelRef,
}: IProps) => {
  return (
    <styled.Item>
      <ProgressBar result={result} title={title} />
      <HabitBtn onDoneHabit={onDoneHabit} okRef={okRef} cancelRef={cancelRef} />
      <styled.Settings className="settings" />
    </styled.Item>
  );
};

export default HabitsItem;