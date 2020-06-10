import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Hello } from '@/pages/Hello';

export const Routes = function () {
  return (
    <Switch>
      <Route exact path="/hello" component={Hello} />
      <Route
        exact
        path="/"
        render={({ location }) => (
          <Redirect to={{ pathname: '/hello', hash: location.hash, search: location.search }} />
        )}
      />
    </Switch>
  );
};
