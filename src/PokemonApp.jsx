import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch(); // Despachar acciones
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <span>{isLoading ? "Loading" : "Loaded"}</span>
      <ul>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <h3>{pokemon.name}</h3>
            </li>
          ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  );
};
