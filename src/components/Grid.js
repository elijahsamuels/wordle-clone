import React from "react";
import Row from "./Row";

function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      Grid
      {guesses.map((guess, index) => {
        return <Row key={index}/>;
      })}
    </div>
  );
}

export default Grid;
