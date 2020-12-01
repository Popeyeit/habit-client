import React from 'react';
import { IParams } from '../../interfaces/habits.interface';
import * as styled from './styled';

interface IProps {
  onDoneHabit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: IParams,
  ) => void;
  idDate: string;
  idHabit: string;
  isDone: 'true' | 'false' | 'null';
}

const HabitBtn = ({ onDoneHabit, idDate, idHabit, isDone }: IProps) => {
  const handleTrueClickBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onDoneHabit(e, { idDate, idHabit, isDone: 'true' });
  };

  const handleFalseClickBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onDoneHabit(e, { idDate, idHabit, isDone: 'false' });
  };

  const setClassName = (isDone: 'true' | 'false' | 'null') => {
    switch (isDone) {
      case 'true':
        return 'not_active';
      case 'false':
        return 'false';

      default:
        return '';
    }
  };

  return (
    <styled.BtnWrapper>
      <styled.Button
        onClick={handleTrueClickBtn}
        className={`${isDone === 'true' ? 'true' : ''}`}
      >
        <svg className={`${isDone === 'true' ? 'true btn' : 'btn'}`}>
          <use href="/img/habits/btns.svg#icon-ok"></use>
        </svg>
      </styled.Button>
      <styled.Button
        onClick={handleFalseClickBtn}
        className={`${setClassName(isDone)}`}
      >
        <svg className={`btn ${setClassName(isDone)}`}>
          <use href="/img/habits/btns.svg#icon-cancel"></use>
        </svg>
      </styled.Button>
    </styled.BtnWrapper>
  );
};

export default HabitBtn;
