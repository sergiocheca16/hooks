import './App.css';
import React from 'react';
import useApiHook from './hooks/useFecthCharacters';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

function App() {
  const pokemon = useApiHook(urlPokemon);
  const rick = useApiHook(urlRick);
  
  return (
    <>
      <h1>Personajes:</h1>

      <h2>Personaje Pokémon:</h2>
      {pokemon && (
        <>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} />
        </>
      )}
      
      {rick && (
        <>
          <h2>Personaje Rick and Morty:</h2>
          <p>{rick.name}</p>
          <img src={rick.image} />
        </>
      )}
    </>
  );
};

export default App;
