import styled from '@emotion/styled';
import {
  BG_GRAY_COLOR,
  BG_GREEN_COLOR,
  TEXT_DARK_COLOR,
  HABIT_TEXT_COLOR,
} from '../../ui/colors';

export const BarWrapper = styled.div`
  width: 28vw;
  font-family: Rubik;
  .title {
    font-weight: 500;

    font-size: 1.2vw;

    line-height: 1.3vw;
    color: #${TEXT_DARK_COLOR};

    margin-bottom: 1rem;
  }

  .description {
    font-size: 0.9vw;

    line-height: 1vw;
    color: #${HABIT_TEXT_COLOR};
  }
`;

export const BarText = styled.p``;

interface IProps {
  done: number;
  notDone: number;
}

export const BarLineWrapper = styled.div`
  margin-bottom: 0.3vw;
`;

export const Bar = styled.div`
  max-width: 26vw;

  height: 0.3vw;

  margin-bottom: 0.3vw;
  background: linear-gradient(
    to right,
    #${BG_GREEN_COLOR} 0%,
    ${(prop: IProps) => prop.done}%,
    #${BG_GRAY_COLOR} ${(prop: IProps) => prop.done}%
  );
`;

export const Span = styled.span`
  display: block;
  margin: 0 auto;
  text-align: center;

  width: 3vw;
  font-weight: 500;

  font-size: 1.2vw;

  line-height: 1.3vw;
  color: #${BG_GREEN_COLOR};
`;
