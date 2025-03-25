import './App.css'
import useFetchApi from './hooks/useFetchApi';
import Card from './components/Card';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/150';
  const urlRick = 'https://rickandmortyapi.com/api/character/30';
  
  const { dataApi: pokemon } = useFetchApi(urlPokemon)
  const { dataApi: rick } = useFetchApi(urlRick)
  
  return (
    <>
      {pokemon ? 
      <Card title='POKEMON' name={pokemon.name} image={pokemon.sprites?.other?.dream_world?.front_default} />
      : <h3>Cargando...</h3>
      }

      {rick ? 
        <Card title='RICK & MORTY' name={rick.name} image={rick.image} />
      : <h3>Cargando...</h3>
      }
    </>
  );
};

export default App;
