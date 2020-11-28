import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Habits from '../../pages/habits/Habits';

const InnerRoute = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/collections`}>
        <Habits />
      </Route>
    </Switch>
  );
};

export default InnerRoute;
