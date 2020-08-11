import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CreateTown from '../form/createTown';
import TownsPage from '../towns/townsPage';
import Header from '../towns/Header';
import Town from '../towns/Town';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/towns" component={TownsPage}/>
        <Route exact path="/createTown" component={CreateTown}/>
        <Route exact path="/town/:id" component={Town} />
      </Switch>
    </Router>
  );
}
