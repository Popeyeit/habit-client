import React, { useRef } from 'react';
import HabitsItem from '../habits-item/HabitsItem';
import data from './data';
import * as styled from './styled';

const HabitsList = () => {
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
      {data.map((el, idx) => {
        const res = el.dates.reduce(
          (acc, el) => {
            const res =
              el.isDone === 'yes' ? (acc.done += 10) : (acc.notDone += 10);
            return acc;
          },
          { done: 0, notDone: 0 },
        );

        return (
          <HabitsItem
            key={el.title}
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
