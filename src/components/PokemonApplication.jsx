import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";


let PokemonApplication = ({  }) => {
  let [chosenPokemonUrl, setChosenPokemonUrl] = useState(null);
  let [confirmedPokemon, setConfirmedPokemon] = useState(null);
  let [chosenPokemon, setChosenPokemon] = useState([]);
  let [pokemons, setPokemons] = useState()

  useEffect (() =>{
    let fetchPokemon = async ()=>{
            let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            let data = await response.json()
            setPokemons(data.results)
  
    } 
    fetchPokemon()
  },[])

  useEffect(() => {
    if (!chosenPokemonUrl) return 
    let pokemonUrl = async () => {
      let response = await fetch(chosenPokemonUrl);
      let data = await response.json();
      setChosenPokemon(data);
    };
    pokemonUrl();
  }, [chosenPokemonUrl]);
  

  return (
    <div className="application">
      <select onChange={(event) => setConfirmedPokemon(event.target.value)}>
        <option value="">Choose pokemon</option>
        {pokemons?.map((pokemon, index) => (
          <option key={index} value={pokemon.url}>{pokemon.name}</option>
        ))}
      </select>
      <button onClick={() => setChosenPokemonUrl(confirmedPokemon)}>
        Get pokemon!
      </button> <br />
      {chosenPokemonUrl && <Pokemon pokemon={chosenPokemon} />  }
      <br /> <br /> <br />
      {!chosenPokemonUrl && <img src="https://i.ebayimg.com/images/g/dtYAAOSw5c5knvFq/s-l1200.jpg" alt="pokeball" width={"100px"}/>}
    </div>
  );
};
export default PokemonApplication;
