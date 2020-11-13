import React from 'react';
import Container from '../../components/container/Container';
import HomeTitle from '../../components/home-title/HomeTitle';
import Logo from '../../components/logo/Logo';
import HomeWelcome from '../../components/home-welcome/HomeWelcome';
import HomeBtn from '../../components/home-btn/HomeBtn';
import * as styled from './styled';

const Home = () => {
  return (
    <styled.Section>
      <Container>
        <HomeTitle />
        <Logo />
        <HomeWelcome />
        <HomeBtn />
      </Container>
    </styled.Section>
  );
};

export default Home;
