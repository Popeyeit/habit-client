import styled from '@emotion/styled';
import { MAIN_LIGHT_COLOR } from '../../ui/colors';
export const Item = styled.li`
  border-left: 8px solid red;
  position: relative;
  max-width: 45vw;
  background-color: #${MAIN_LIGHT_COLOR};
  border-radius: 10px;
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1.875rem;
  }
  .settings {
    cursor: pointer;
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px;
    background: center no-repeat url(img/habits/settings.svg);
  }
`;

export const Settings = styled.button`
  border: none;
  background-color: transparent;
`;
