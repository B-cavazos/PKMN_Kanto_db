import React from 'react';
import {pkmnData} from './data/pkmnData'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      {/* header */}
      header
      {/* search bar */}
      <div className="row">
        search
      </div>
      {/* list of pokemon */}
      <div className="row text-center">
          {pkmnData.map(pkmn=>{
            return(
              <div className="col-3 py-3">
                <div className="card px-5 pt-3">
                <img className="card-img-top" src={pkmn.img}alt={pkmn.name}/>
                <div className="card-body">
                  <h5 className="card-title">{pkmn.name}</h5>
                  <p className="card-text">No. {pkmn.num}</p>
                  <p className="card-text">{`Type: ${pkmn.type}`}</p>
                  <button className="btn btn-success">More Details</button>
                </div>
              </div>
              </div>
            )   
          })}
      </div>
    </div>
  );
}

export default App;
