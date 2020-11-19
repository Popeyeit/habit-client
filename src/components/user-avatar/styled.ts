import styled from '@emotion/styled';
import {
  BORDER_COLOR,
  TEXT_DARK_COLOR,
  MAIN_LIGHT_COLOR,
  BG_GREEN_COLOR,
} from '../../ui/colors';

import { TSubscribeColor } from './UserAvatar';

const setLinear = (type: TSubscribeColor) => {
  switch (type) {
    case 'Basic':
      return `background: linear-gradient(222.27deg, #2EEBDA 3.75%, #7CF7A3 94.69%);`;
    case 'Standard':
      return `background: linear-gradient(222.27deg, #F8C102 3.75%, #FE6083 94.69%);`;
    case 'Premium':
      return `background: linear-gradient(222.27deg, #FE6083 3.75%, #B469FA 94.69%);`;
    case 'Ultra':
      return `background: linear-gradient(222.27deg, #B469FA 3.75%, #655DE6 94.69%);`;

    default:
      return `background-color: #${BG_GREEN_COLOR};`;
  }
};

export const UserWrapper = styled.div`
  border-bottom: 1px solid #${BORDER_COLOR};
  font-family: Rubik;
  margin: 0 auto;
  padding: 40px 0 20px 0;
  width: 100%;
`;

export const UserAvatar = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  margin: 0 auto;
  max-width: 240px;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: #${TEXT_DARK_COLOR};
  margin-bottom: 8px;
`;

interface IProp {
  type: TSubscribeColor;
}

export const Subscribe = styled.p`
  margin: 0 auto;
  max-width: 80px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  border-radius: 5px;
  color: #${MAIN_LIGHT_COLOR};
  ${(props: IProp) => setLinear(props.type)}
`;
