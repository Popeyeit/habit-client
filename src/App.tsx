import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContentWrapper from './components/content-wrapper/ContentWrapper';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Habits from './pages/habits/Habits';
import './App.css';
import { getCurrentUserOperation } from './redux/user/operation';
import Header from './components/header/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserOperation());
  }, [dispatch]);
  return (
    <div className="App">
      {/* {<Home />} */}
      <Header text="Чек-лист привычек" />
      <ContentWrapper>
        <Sidebar />
        <Habits />
        <Sidebar />
      </ContentWrapper>
    </div>
  );
}

export default App;
