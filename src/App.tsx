import React from 'react';
import {pkmnData} from './data/pkmnData'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      {/* header */}
      <div className="row mt-5 mb-3">
        <div className="col text-center text-danger">
          <h1>Kanto Region Pokedex</h1>
        </div>
      </div>
      {/* search bar */}
      <div className="row">
        <form action="" className="form-group col mt-3">
          <input type="text" className="form-control" placeholder="Who's that Pokemon?"/>
        </form>
      </div>
      {/* list of pokemon */}
      <div className="row text-center">
          {pkmnData.map(pkmn=>{
            return(
              <div className="col-3 py-3">
                <div className="card px-5 pt-3">
                <img className="card-img-top" src={pkmn.img}alt={pkmn.name}/>
                <div className="card-body">
                  <div className="card-title">
                    <h5>{pkmn.name}<hr/></h5>
                    <small className="card-text">No. {pkmn.num}</small>
                  </div>
                  <p className="card-text">{`Type: ${pkmn.type}`}</p>
                  <button className="btn btn-primary">More Details</button>
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
