import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import HomePage from './pages/home'
import DetailsPage from './pages/details'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderComp />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/pokemon/:pokemonId" component={DetailsPage}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
