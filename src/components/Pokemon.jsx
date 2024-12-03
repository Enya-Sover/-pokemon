import React from "react";
let Pokemon = ({ pokemon }) => {

  return (
    <div className="card">
      <h2>Name: {pokemon.name}</h2>
      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
      <p>Type: 
      {pokemon?.types?.map((element, i)=>{
        return(<React.Fragment key={i}>
       {i >=1 ? ' & ': ''} {element.type.name} 
        </React.Fragment>)
    })}
    </p>
      <p>Weight: {pokemon.weight/10} kg</p>
      <p>Height: {pokemon.height/10} m</p>
    </div>
  );
};
export default Pokemon;