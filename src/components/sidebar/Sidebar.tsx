import React from 'react';
import UserAvatar from '../user-avatar/UserAvatar';
import Navigation from '../navigation/Navigation';
import SidebarHabits from '../sidebar-habits/SidebarHabits';
import * as styled from './styled';
const Sidebar = () => {
  return (
    <styled.Section>
      <UserAvatar
        avatar="img/users/user_avatar.svg"
        name="Tommy Belkov"
        subscribe="Standard"
      />
      <styled.NavWrapper>
        <Navigation />
      </styled.NavWrapper>
      <SidebarHabits />
    </styled.Section>
  );
};

export default Sidebar;
