import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import { IStore } from '../../interfaces/store.type';
import UserAvatar from '../user-avatar/UserAvatar';
import Navigation from '../navigation/Navigation';
import SidebarHabits from '../sidebar-habits/SidebarHabits';
import CreateHabitForm from '../create-habit-form/CreateHabitForm';
import * as styled from './styled';

const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useSelector((state: IStore) => state.auth);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <styled.Section>
      <UserAvatar
        avatar="/img/users/user_avatar.svg"
        name={user.nickName}
        subscribe="Standard"
      />
      <styled.NavWrapper>
        <Navigation />
      </styled.NavWrapper>
      <SidebarHabits openModal={openModal} />
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <CreateHabitForm closeModal={closeModal} />
      </Modal>
    </styled.Section>
  );
};

export default Sidebar;
