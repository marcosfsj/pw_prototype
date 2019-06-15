import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Prototype = lazy(() => import('../../features/prototype/Prototype'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/Prototype" component={Prototype} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
