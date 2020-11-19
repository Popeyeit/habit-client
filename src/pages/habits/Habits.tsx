import React from 'react';
import ContentSection from '../../components/contentSection/ContentSection';
import HabitsList from '../../components/habits-list/HabitsList';
import * as styled from './styled';
const Habits = () => {
  return (
    <ContentSection>
      <HabitsList />
    </ContentSection>
  );
};

export default Habits;
