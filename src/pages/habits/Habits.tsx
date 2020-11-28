import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../redux/store';
import { getHabitsOperation } from '../../redux/habits/operation';
import ContentSection from '../../components/contentSection/ContentSection';
import HabitsList from '../../components/habits-list/HabitsList';
import * as styled from './styled';
import { Store } from '@reduxjs/toolkit';

const state = store.getState();
type IStore = typeof state;

const Habits = () => {
  const { habits } = useSelector((state: IStore) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHabitsOperation());
  }, [dispatch]);
  return (
    <ContentSection>
      <HabitsList habits={habits} />
    </ContentSection>
  );
};

export default Habits;
