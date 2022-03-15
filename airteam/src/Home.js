import React, { useEffect, useState } from "react";
import Box from "./Box";
import Pokedex from "./Pokedex";
import axios from "axios";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    const pokeFun = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    };
    pokeFun();
  }, [url]);
  return (
    <>
      <div className="container">
        <div className="containerL">
          <Box
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="containerR">
          <Pokedex data={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Home;
