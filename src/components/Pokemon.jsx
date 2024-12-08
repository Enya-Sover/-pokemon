import React from "react";
let Pokemon = ({ pokemon }) => {
  let capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div className="card">
      <h2>Name: {capitalizeFirstLetter(pokemon.name)}</h2>
      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
      <p>
        Type:
        {pokemon?.types?.map((element, i) => {
          return (
            <React.Fragment key={i}>
              {i >= 1 ? " & " : ""} {capitalizeFirstLetter(element.type.name)}
            </React.Fragment>
          );
        })}
      </p>
      <p>Weight: {pokemon.weight / 10} kg</p>
      <p>Height: {pokemon.height / 10} m</p>
    </div>
  );
};
export default Pokemon;
