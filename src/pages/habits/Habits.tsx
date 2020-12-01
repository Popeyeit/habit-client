import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../redux/store';
import { getHabitsOperation } from '../../redux/habits/operation';
import ContentSection from '../../components/contentSection/ContentSection';
import HabitsList from '../../components/habits-list/HabitsList';
import Loader from '../../components/loader/Loader';
import * as styled from './styled';

const state = store.getState();
type IStore = typeof state;

const Habits = () => {
  const { currentDate } = useSelector((state: IStore) => state);
  const { habits } = useSelector((state: IStore) => state);
  const { loader } = useSelector((state: IStore) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHabitsOperation(currentDate));
  }, [dispatch, currentDate]);

  return (
    <ContentSection>
      {loader && <Loader />}
      {!loader && <HabitsList habits={habits} />}
    </ContentSection>
  );
};

export default Habits;
