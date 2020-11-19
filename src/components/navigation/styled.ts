import styled from '@emotion/styled';
import {
  BG_ACTIVE_NAV_LINK,
  BG_NAV_LINK,
  BG_GREEN_COLOR,
  ICON_ACTIVE_COLOR,
} from '../../ui/colors';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 0 auto;
  padding: 25px 0;

  .link {
    position: relative;
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background-color: #${BG_NAV_LINK};
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }
    &.calendar::before {
      background: center no-repeat url(img/nav/calendar.svg) #${BG_GREEN_COLOR};
    }
    &.cup::before {
      background: center no-repeat url(img/nav/cup.svg) #${BG_GREEN_COLOR};
    }

    &.bell::before {
      background: center no-repeat url(img/nav/bell.svg) #${BG_GREEN_COLOR};
    }
  }
  .active-icon {
    &:nth-of-type(1n)::before {
      background-color: #${ICON_ACTIVE_COLOR};
    }
  }
  .active {
    background-color: #${BG_ACTIVE_NAV_LINK};
  }
`;
