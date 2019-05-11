import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSpace } from '3box-react-hooks';
import Header from './Header';
import Dashboard from './Dashboard';
import Board from './Board';

const App = ({}) => {
  const space = useSpace('Jumble');

  return (
    <Router>
      <Header space={space} />

      <Route path="/" exact render={() => <Dashboard space={space} />} />
      <Route path="/board/:hash" render={() => <Board space={space} />} />
    </Router>
  );
};

export default React.memo(App);

