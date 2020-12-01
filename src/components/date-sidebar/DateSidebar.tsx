import React from 'react';
import DatePickerInline from '../date-picker-inline/DatePickerInline';
import * as styled from './styled';

const DateSidebar = () => {
  return (
    <styled.Section>
      <DatePickerInline />
    </styled.Section>
  );
};

export default DateSidebar;
