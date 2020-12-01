import React from 'react';
import { jsx, css, keyframes, ClassNames } from '@emotion/react';
import * as styled from './styled';

interface IProps {
  result: number;
  title: string;
}

const animateBar = keyframes`
from, 0%, to {
    width: 0%;
  }
  100%,  {
   width:100%;
  }`;

const ProgressBar = ({ result, title = 'title' }: IProps) => {
  return (
    <styled.BarWrapper>
      <styled.BarText className="title">{title}</styled.BarText>
      <styled.BarLineWrapper>
        <ClassNames>
          {({ css }) => (
            <styled.Bar
              done={result}
              notDone={100 - result}
              className={css`
                animation: ${animateBar} 3s ease;
              `}
            />
          )}
        </ClassNames>

        <styled.Span>{result}%</styled.Span>
      </styled.BarLineWrapper>
      <styled.BarText className="description">
        Прогресс привития привычки
      </styled.BarText>
    </styled.BarWrapper>
  );
};

export default ProgressBar;
