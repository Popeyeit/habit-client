import React from 'react';
import { Button } from '../../ui/default-component/Button';
import * as styled from './styled';
import data from './data';
import colors from '../../data/colorsHabit';
const SidebarHabits = () => {
  return (
    <styled.HabitsWrapper>
      <styled.HabitTitle>Привычки</styled.HabitTitle>
      <styled.HabitsList>
        {data.map((el, idx) => (
          <styled.HabitItem key={el.text} color={colors[idx]}>
            {el.text}
          </styled.HabitItem>
        ))}
      </styled.HabitsList>
      <Button className="bg-green">Добавить привычку +</Button>
    </styled.HabitsWrapper>
  );
};

export default SidebarHabits;
