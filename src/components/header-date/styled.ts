import styled from '@emotion/styled';
import { TEXT_DARK_COLOR } from '../../ui/colors';

export const WrapperDate = styled.p`
  width: 23.625vw;
  font-family: Rubik;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #${TEXT_DARK_COLOR};
  .week {
    font-weight: 500;
    text-transform: capitalize;
    margin-right: 8px;
  }
  .dot {
    display: inline-block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background-color: #${TEXT_DARK_COLOR};
    margin-right: 8px;
  }
`;
