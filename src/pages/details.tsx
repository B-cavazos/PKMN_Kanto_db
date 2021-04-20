
import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom' //returns an object of properties (params)
import pkmnData from '../data/pkmnData'
import {setTypeColor} from '../services'

const DetailsPage: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const { pokemonName } = useParams<{ pokemonName: string }>();
  
    useEffect(() => {
      let foundPokemon = pkmnData.find(
        pd => pd.name.toLowerCase() === pokemonName
      );
      // console.log(foundPokemon);
      setPokemon(updateEvolution(foundPokemon));
    }, [pokemonName]);
    
    const updateEvolution = (poke: Pokemon | undefined) => {
    // check for next_evolution && || prev_evolution
    //  loop through each of the evolution arrays
    // loop through the pokemon data set
    // find the pokemon in pokemonData that matches the evolution pokemon
    // set the evolution.img = pokemon.img
    // return our updatedPoke

    if (poke?.next_evolution) {
      poke.next_evolution.map(ne => {
        pkmnData.forEach(pd => {
          if (pd.name === ne.name) {
            ne.img = pd.img;
          }
        });
        return ne;
      });
    }

    if (poke?.prev_evolution) {
      poke.prev_evolution.map(pe => {
        pkmnData.forEach(pd => {
          if (pd.name === pe.name) {
            pe.img = pd.img;
          }
        });
        return pe;
      });
    }

    console.log(poke);
    return poke;
  };

    return (
        <div id="single-page">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-sm-12 col-md-2 pkmn-bg">
                                <img className="card-img-top" src= {pokemon?.img} alt={pokemon?.name}/>  
                            </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card-body">
                                <h3 className="card-title">
                                    {pokemon?.name}
                                    <span>#{pokemon?.num}</span>
                                </h3>
                                <hr/>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-secondary">Height:</div>
                                        <div>{pokemon?.height}</div>
                                        <div className="text-secondary"> Weight: </div>
                                        <div>{pokemon?.weight}</div>
                                    </div>
                                    <div className="col">
                                        <div className="text-secondary">Type: </div>
                                        <div>
                                            {pokemon?.type.map((t,i)=>{
                                            return <span key={i} className="badge badge-pill text-white mx-1" style={{backgroundColor: setTypeColor(t)}}>{t} </span>
                                        })}
                                        </div>
                                        <div className="text-secondary"> Weaknesses: </div>
                                        <div>
                                            {pokemon?.weaknesses.map((w,i)=>{
                                            return <span key={i} className="badge badge-pill text-white mx-1" style={{backgroundColor: setTypeColor(w)}}>{w} </span>
                                        })}
                                        </div> 
                                        <hr/>
                                    </div>
                                    
                                </div>
                                <div className="row">    
                                    <div className="col">
                                        {pokemon?.prev_evolution?.map((pe,i)=>{
                                            return (
                                                <div className='col'>
                                                <h5 className='text-secondary'>
                                                    Previous Evolution
                                                </h5>
                                                <div>
                                                    <Link to={`/pokemon/${pe.name.toLowerCase()}`}>
                                                    {pe.name}
                                                    </Link>
                                                </div>
                                                <img src={pe.img} alt={pe.name} />
                                                </div>
                                            );
                                            })}
                                            {pokemon?.next_evolution?.map((ne, i) => {
                                            return (
                                                <div className='col'>
                                                <h5 className='text-secondary'>Next Evolution</h5>
                                                <div>
                                                    <Link to={`/pokemon/${ne.name.toLowerCase()}`}>
                                                    {ne.name}
                                                    </Link>
                                                </div>
                                                <img src={ne.img} alt={ne.name} />
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default DetailsPage;