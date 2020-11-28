import React from 'react';
import { IResult } from '../../interfaces/habits.interface';
import * as styled from './styled';

interface IProps {
  result: IResult;
  title: string;
}

const ProgressBar = ({ result, title = 'title' }: IProps) => {
  return (
    <styled.BarWrapper>
      <styled.BarText className="title">{title}</styled.BarText>
      <styled.BarLineWrapper>
        <styled.Bar done={result.done} notDone={result.notDone} />
        <styled.Span>{result.done}%</styled.Span>
      </styled.BarLineWrapper>
      <styled.BarText className="description">
        Прогресс привития привычки
      </styled.BarText>
    </styled.BarWrapper>
  );
};

export default ProgressBar;
