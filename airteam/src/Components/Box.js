import React from "react";

const Box = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="box"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2>{item.id}</h2>
                <img
                  src={item.sprites.front_default}
                  alt=""
                  className="photo"
                />
                <h2 className="cfirst">{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Box;
