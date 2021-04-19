import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/home'
import DetailsPage from '../pages/details'

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/pokemon/:pokemonName" component={DetailsPage}/>
    </Switch>
);

export default Routes;

