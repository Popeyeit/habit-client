import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar';
import HabitBtn from '../habit-btn/HabisBtn';
import { IProps } from '../../interfaces/habits.interface';
import * as styled from './styled';

const HabitsItem = ({
  result,
  title,
  onDoneHabit,
  idHabit,
  idDate,
  isDone,
}: IProps) => {
  return (
    <styled.Item>
      <ProgressBar result={result} title={title} />
      <HabitBtn
        idHabit={idHabit}
        idDate={idDate}
        onDoneHabit={onDoneHabit}
        isDone={isDone}
      />
      <styled.Settings className="settings" />
    </styled.Item>
  );
};

export default HabitsItem;
