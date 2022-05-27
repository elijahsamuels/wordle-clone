import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

function Wordle({ solution }) {
  const {
    currentGuess,
    handleKeyup,
    guesses,
    isCorrect,
    turn,
    usedKeys,
  } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    // if the player wins
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    // if the player loses
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      {/* <p>solution: {solution}</p> */}
      {/* <p>currentGuess: {currentGuess}</p> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}

export default Wordle;
