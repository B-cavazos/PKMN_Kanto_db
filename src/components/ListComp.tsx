
import React from 'react';
import pkmnData from '../data/pkmnData'

const ListComp: React.FC = () => {
    return (
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
    );
};

export default ListComp;

