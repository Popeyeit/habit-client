import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { momentFormat } from '../../redux/current-date/CurrentDate';
import { IStore } from '../../interfaces/store.type';
import * as styled from './styled';

const HeaderDate = () => {
  const { currentDate } = useSelector((state: IStore) => state);

  const setTime = () => {
    return moment(currentDate, momentFormat).format('dddd,D,MMMM').split(',');
  };

  const time = useMemo(setTime, [currentDate]);

  return (
    <styled.WrapperDate>
      <span className="week">{time[0]}</span>
      <span className="dot"></span>
      {time[1]} {time[2]}
    </styled.WrapperDate>
  );
};

export default HeaderDate;
