import React, { useRef } from 'react';
import HabitsItem from '../habits-item/HabitsItem';
import { TInitState } from '../../redux/habits/slice';
import * as styled from './styled';

interface IProps {
  habits: TInitState;
}

const HabitsList = ({ habits }: IProps) => {
  const ok = useRef(null);
  const cancel = useRef(null);

  const handleDoneHabit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const { target } = e;
    console.log(target);
    console.log(ok.current);
    console.log(cancel.current);
  };
  return (
    <styled.List>
      {habits.map((el, idx) => {
        const res = el.dates.reduce(
          (acc, el) => {
            el.isDone === 'true' ? (acc.done += 10) : (acc.notDone += 10);
            return acc;
          },
          { done: 0, notDone: 0 },
        );

        return (
          <HabitsItem
            key={el._id}
            result={res}
            title={el.title}
            onDoneHabit={handleDoneHabit}
            okRef={ok}
            cancelRef={cancel}
          />
        );
      })}
    </styled.List>
  );
};

export default HabitsList;
