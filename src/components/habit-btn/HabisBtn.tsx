import React from 'react';
import * as styled from './styled';

interface IProps {
  onDoneHabit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  okRef: React.RefObject<HTMLButtonElement> | null | undefined;
  cancelRef: React.RefObject<HTMLButtonElement> | null | undefined;
}

const HabitBtn = ({ onDoneHabit, cancelRef, okRef }: IProps) => {
  return (
    <styled.BtnWrapper>
      <styled.Button onClick={onDoneHabit} ref={okRef}>
        <svg className="true btn">
          <use href="img/habits/btns.svg#icon-ok"></use>
        </svg>
      </styled.Button>
      <styled.Button onClick={onDoneHabit} ref={cancelRef}>
        <svg className="false btn">
          <use href="img/habits/btns.svg#icon-cancel"></use>
        </svg>
      </styled.Button>
    </styled.BtnWrapper>
  );
};

export default HabitBtn;
