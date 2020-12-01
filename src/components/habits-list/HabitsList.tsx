import React from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { changeHabitOperation } from '../../redux/habits/operation';
import HabitsItem from '../habits-item/HabitsItem';
import { TInitState } from '../../redux/habits/slice';
import { IParams } from '../../interfaces/habits.interface';
import * as styled from './styled';
import './Animation.css';

interface IProps {
  habits: TInitState;
}

const HabitsList = ({ habits }: IProps) => {
  const dispatch = useDispatch();

  const handleDoneHabit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: IParams,
  ) => {
    dispatch(changeHabitOperation(params));
  };
  return (
    <styled.ListWrapper>
      <TransitionGroup component="ul" className="list">
        {habits.map((el, idx) => {
          return (
            <CSSTransition
              key={el._id}
              timeout={300}
              classNames="fade"
              mountOnEnter
              appear={true}
            >
              <HabitsItem
                result={el.totalHabitDone}
                title={el.title}
                onDoneHabit={handleDoneHabit}
                idHabit={el._id}
                idDate={el.date[0]._id}
                isDone={el.date[0].isDone}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </styled.ListWrapper>
  );
};

export default HabitsList;
