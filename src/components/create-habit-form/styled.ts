import styled from '@emotion/styled';
import {
  TEXT_DARK_COLOR,
  VALIDATE_RED_COLOR,
  BORDER_GRAY_COLOR,
} from '../../ui/colors';

export const FormWrapper = styled.div`
  width: 425px;
  margin: 0 auto;
  padding: 60px 0;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .habit__select {
    border: 1px solid #${BORDER_GRAY_COLOR};
    color: #${TEXT_DARK_COLOR};
    border-radius: 5px;
    height: 44px;
    padding: 0 12px;
    width: 100%;
  }
`;

export const Title = styled.p`
  max-width: 664px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: #${TEXT_DARK_COLOR};
  span {
    color: #${TEXT_DARK_COLOR};
    opacity: 0.4;
    font-size: 18px;
    line-height: 28px;
    display: block;
    font-weight: 400;
  }
  margin-bottom: 40px;
`;

export const Label = styled.label`
position:relative;
display:block;
  font-family: Rubik;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 40px;
  &:first-of-type{
    width:100%;
  }
  width:75%;
  color: #${TEXT_DARK_COLOR};
  input {
    border: 1px solid #${BORDER_GRAY_COLOR};
    color: #${TEXT_DARK_COLOR};
     border-radius: 5px;
     height: 44px;
     padding:6px 12px;
     width: 100%;
  }
  input:focus {
    border: 1px solid #${TEXT_DARK_COLOR}
`;

export const ErrorMessage = styled.div`
  color: #${VALIDATE_RED_COLOR};
  position: absolute;
  text-align: center;
  font-size: 14px;
  pointer-events: none;
`;
