import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';

const Prototype = lazy(() => import('../../features/prototype/prototype'));
const PrototypeTwo = lazy(() => import('../../features/prototype-two/prototype-two'));
const Comments = lazy(() => import('../../features/comments/comments'));

const routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/prototype" component={Prototype} />
        <Route exact path="/prototypeTwo" component={PrototypeTwo} />
        <Route exact path="/comments" component={Comments} />
        <ProtectedRoute exact path="/app" component={() => "protected"} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Suspense>
  );
};

export default routes;
