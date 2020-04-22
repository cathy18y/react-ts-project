import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './container/routes';

const history = require('history').createBrowserHistory;

const render = () => {
  ReactDOM.render(
    <Routes history={history}/>,
    document.getElementById('root'),
  );
};

render();
