import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../interfaces/store.type';
import { Button } from '../../ui/default-component/Button';
import * as styled from './styled';

interface IProps {
  openModal: () => void;
}

const SidebarHabits = ({ openModal }: IProps) => {
  const { habits } = useSelector((state: IStore) => state);
  return (
    <styled.HabitsWrapper>
      <styled.HabitTitle>Привычки</styled.HabitTitle>
      <styled.HabitsList>
        {habits.map((el, idx) => (
          <styled.HabitItem key={el._id}>{el.title}</styled.HabitItem>
        ))}
      </styled.HabitsList>
      <Button className="bg-green" onClick={openModal}>
        Добавить привычку +
      </Button>
    </styled.HabitsWrapper>
  );
};

export default SidebarHabits;
