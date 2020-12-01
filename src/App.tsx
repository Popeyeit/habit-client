import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContentWrapper from './components/content-wrapper/ContentWrapper';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { getCurrentUserOperation } from './redux/user/operation';
import Header from './components/header/Header';
import InnerRoute from './components/inner-route/InnerRoute';
import DateSidebar from './components/date-sidebar/DateSidebar';
import { IStore } from './interfaces/store.type';
import './App.css';

const redirectToHome = () => {
  return <Redirect to="/home" />;
};

function App() {
  const { token } = useSelector((state: IStore) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserOperation());
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        {token ? (
          <Route path="/home">
            <Header text="Чек-лист привычек" />
            <ContentWrapper>
              <Sidebar />
              <InnerRoute />
              <DateSidebar />
            </ContentWrapper>
          </Route>
        ) : (
          <Route path="/home">
            <Home />
          </Route>
        )}
      </Switch>
      {redirectToHome()}
    </div>
  );
}

export default App;
