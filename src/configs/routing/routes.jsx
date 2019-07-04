import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';

const SomeView = lazy(() => import('../../views/SomeView'));
const Comment = lazy(() => import('../../views/Comment'));

const routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/someview" component={SomeView} />
        <Route exact path="/comments" component={Comment} />
        <ProtectedRoute exact path="/app" component={() => "protected"} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Suspense>
  );
};

export default routes;
