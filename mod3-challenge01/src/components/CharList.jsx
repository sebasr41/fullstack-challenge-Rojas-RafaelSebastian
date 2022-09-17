import React, { useEffect } from "react";
import { useState } from "react";
import { getCharacters } from "../service";
import Char from "./Char";

const CharList = () => {
  const [charList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCharSelect, setCharS] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => {
        setCharList(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {
        <div className="page">
          <img src={isCharSelect} alt="No hay imagen" />
        </div>
      }
      {isLoading && <h1 className="loading-text">Loading...</h1>}
      <div className="center">
        {charList.map((char) => (
          <Char
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            image={char.image}
            setCharS={setCharS}
          />
        ))}
      </div>
    </>
  );
};

export default CharList;