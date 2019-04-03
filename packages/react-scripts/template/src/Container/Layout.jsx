import React, {Component, Fragment} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';

import routes from './Routes';
import NotFound from '../Views/NotFound';

export default class Layout extends Component {
  render () {
    return (
      <HashRouter>
        <Fragment>
          <Switch>
            {routes.map ((route, i) => (
              <Route
                key={i}
                exact={!!route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </HashRouter>
    );
  }
}
