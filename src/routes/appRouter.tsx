import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/home'
import DetailsPage from '../pages/details'

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/pokemon/:pokemonId" component={DetailsPage}/>
    </Switch>
);

export default Routes;

