import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import getMonth from 'date-fns/getMonth';
import {
  setCurrentDate,
  momentFormat,
} from '../../redux/current-date/CurrentDate';
import * as styled from './styled';

const DatePickerInline = () => {
  const dispatch = useDispatch();
  const addMonths = (date: Date, toNextDate: number) => {
    const finalDate = new Date(date.setMonth(date.getMonth() + toNextDate));
    return finalDate;
  };

  const [startDate, setStartDate] = useState(new Date());
  const prevDate = useRef(addMonths(new Date(), -1));
  const nextDate = useRef(addMonths(new Date(), +1));

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const increaseDate = (increaseMonth: () => void, date: Date) => {
    prevDate.current = addMonths(new Date(date), 0);
    nextDate.current = addMonths(new Date(date), 2);
    increaseMonth();
  };

  const decreaseDate = (decreaseMonth: () => void, date: Date) => {
    nextDate.current = addMonths(new Date(date), 0);
    prevDate.current = addMonths(new Date(date), -2);
    decreaseMonth();
  };

  useEffect(() => {
    prevDate.current = addMonths(new Date(startDate), -1);
    nextDate.current = addMonths(new Date(startDate), +1);

    dispatch(setCurrentDate(moment(startDate).format(momentFormat)));
  }, [startDate, dispatch]);

  return (
    <styled.DatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        inline
        locale="ru"
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="month_wrapper">
            <button
              onClick={() => decreaseDate(decreaseMonth, date)}
              disabled={prevMonthButtonDisabled}
            >
              {'<'}
            </button>
            <div className="month_list">
              <span className="month_header">
                {months[getMonth(prevDate.current)]}
              </span>
              <span className="month_header active">
                {months[getMonth(date)]}
              </span>
              <span className="month_header">
                {months[getMonth(nextDate.current)]}
              </span>
            </div>

            <button
              onClick={() => increaseDate(increaseMonth, date)}
              disabled={nextMonthButtonDisabled}
            >
              {'>'}
            </button>
          </div>
        )}
      />
    </styled.DatePickerWrapper>
  );
};

export default DatePickerInline;
