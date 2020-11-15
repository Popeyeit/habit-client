import styled from '@emotion/styled';
import {
  MAIN_LIGHT_COLOR,
  BORDER_GRAY_COLOR,
  TEXT_DARK_COLOR,
  BG_GRAY_COLOR,
} from '../../ui/colors';

import { device } from '../../helpers/media';

export const Section = styled.section`
  background-color: #${BG_GRAY_COLOR};
  background-size: cover;
  padding: 48px 0 90px 0;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const FormWrapper = styled.div`
  padding: 0 20px;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media${device.tablet} {
    padding: 0;
    max-width: 470px;
  }
  input {
    width: 100%;
    height: 44px;
    background: #${MAIN_LIGHT_COLOR};
    border: 1px solid #${BORDER_GRAY_COLOR};
    border-radius: 5px;
    color: #${TEXT_DARK_COLOR};
    font-family: Rubik;
    font-size: 16px;
    line-height: 19px;
    padding: 8px 20px;
    @media${device.tablet} {
    }
  }
`;
