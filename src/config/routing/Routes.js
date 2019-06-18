import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Prototype = lazy(() => import('../../features/prototype/prototype'));
const PrototypeTwo = lazy(() => import('../../features/prototype-two/prototype-two'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/Prototype" component={Prototype} />
        <Route exact path="/PrototypeTwo" component={PrototypeTwo} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
