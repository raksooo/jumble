import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Dashboard from './Dashboard';
import Board from './Board';

const App = ({}) => {
  const [space, setSpace] = useState(null);

  return (
    <Router>
      <Header space={space} setSpace={setSpace} />

      <Route path="/" exact render={() => <Dashboard space={space} />} />
      <Route path="/board/:hash" render={() => <Board space={space} />} />
    </Router>
  );
};

export default React.memo(App);

