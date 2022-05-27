import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  // useEffect(() => {
  // 	console.log("guesses:", guesses)
  // 	console.log("isCorrect:", isCorrect)
  // 	console.log("turn:", turn)
  // }, [guesses, isCorrect, turn])

  return (
    <div>
      <p>solution: {solution}</p>
      <p>currentGuess: {currentGuess}</p>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
			<Keypad usedKeys={usedKeys} />
    </div>
  );
}

export default Wordle;
