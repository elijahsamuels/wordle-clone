import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["hello", "brace"]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
		console.log("formatting guess", currentGuess);
		return

	};

  const addNewGuess = () => {};

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // submit word
      if (turn > 5) {
				console.log("no more guesses available");
				return
      }
      if (history.includes(currentGuess)) {
				console.log("already tried this word", currentGuess);
				return

      }
      if (currentGuess.length !== 5) {
				console.log("word is not long enough");
				return
      }
			formatGuess()
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[a-zA-Z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
