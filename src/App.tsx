import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderComp from './components/HeaderComp';
import './App.css';
import Routes from './routes/appRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderComp />
        <Routes />
      </Router>
    </div>

  );
}

export default App;
