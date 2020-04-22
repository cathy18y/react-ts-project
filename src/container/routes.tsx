import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App/index';
import Overview from './Overview/index';
import Management from './Management/index';

interface Props {
  history: any,
}

const routes = (
  <Router>
    <Switch>
      <App>
        <Switch>
          <Route exact path='/overview' component={Overview} />
          <Route exact path='/management' component={Management} />
        </Switch>
      </App>
    </Switch>
  </Router>
);

class Routes extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  };

  public render() {
    return <div>{routes}</div>;
  }
};

export default Routes;
