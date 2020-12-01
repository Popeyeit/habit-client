import React, { useState, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import * as styled from './styled';

registerLocale('ru', ru);

const DatePickerHabit = () => {
  const { setFieldValue } = useFormikContext();
  const [startDate, setStartDate] = useState(new Date());
  const calendarRef = useRef<SVGSVGElement>(null);
  const handleCalendarClose = () => {
    if (calendarRef.current) {
      calendarRef.current.classList.remove('active-calendar');
    }
  };
  const handleCalendarOpen = () => {
    if (calendarRef.current) {
      calendarRef.current.classList.add('active-calendar');
    }
  };
  const addMonths = (date: Date, toNextDate: number) => {
    const finalDate = new Date(date.setMonth(date.getMonth() + toNextDate));
    return finalDate;
  };

  return (
    <styled.DatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date: Date, dateString) => {
          setFieldValue('startDate', date);
          setStartDate(date);
        }}
        dateFormat="dd.MMMM.yyyy"
        locale={ru}
        className="custom-input"
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        popperPlacement="top-end"
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        name="startDate"
      />
      <svg width="20" height="20" className="calendar" ref={calendarRef}>
        <use href="/img/calendar.svg#icon-calendar"></use>
      </svg>
    </styled.DatePickerWrapper>
  );
};

export default DatePickerHabit;
