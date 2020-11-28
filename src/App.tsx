import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ContentWrapper from './components/content-wrapper/ContentWrapper';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Habits from './pages/habits/Habits';
import './App.css';
import { getCurrentUserOperation } from './redux/user/operation';
import Header from './components/header/Header';
import CreateHabitForm from './components/create-habit-form/CreateHabitForm';
import InnerRoute from './components/inner-route/InnerRoute';

const isAuth = () => {
  return true;
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserOperation());
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/habit">
          <Header text="Чек-лист привычек" />
          <ContentWrapper>
            <Sidebar />
            <InnerRoute />
            <Sidebar />
          </ContentWrapper>
        </Route>
      </Switch>

      {/* {<CreateHabitForm />} */}
    </div>
  );
}

export default App;
