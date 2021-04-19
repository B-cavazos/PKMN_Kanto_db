import React, {useState, useEffect, ChangeEvent} from 'react';
import {Link} from 'react-router-dom'
import {pkmnData} from '../data/pkmnData'

const SearchComp: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>(pkmnData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  useEffect( () => {
    const foundPoke = pkmnData.filter((p)=>{
      return p.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    searchTerm === '' ? setPokemon(pkmnData): setPokemon(foundPoke);
  },[searchTerm]);

  //function to update input and setsearch name
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

  };

  return (
    <div className="container">
      <div className="row">
          <form action="" className="form-group col mt-3">
            <input 
              type="text" 
              className="form-control" 
              value={searchTerm}
              onChange={handleChange}
              placeholder="Who's that Pokemon?"
              />
          </form>
      </div>
      <div className="row text-center">
          {pokemon.map(pkmn=>{
          return(
              <div className="col-3 py-3">
              <div className="card mx-2 mt-3 ">
                  <div className="pkmn-bg px-5">
                      <img className="card-img-top" src={pkmn.img}alt={pkmn.name}/>
                  </div>
                  <div className="card-body">
                      <div className="card-title">
                          <h5><Link to={`/pokemon/${pkmn.name.toLowerCase()}`}>{pkmn.name}</Link><hr/></h5>
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
};

export default SearchComp;