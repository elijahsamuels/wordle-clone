import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let fomattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    // find letters to mark as green
    fomattedGuess.forEach((letter, index) => {
      if (solutionArray[index] === letter.key) {
        fomattedGuess[index].color = "green";
        solutionArray[index] = null;
      }
    });

    // find letters to mark as yellow
    fomattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        fomattedGuess[index].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
    return fomattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
		setTurn((prevTurn) => {
			return prevTurn + 1
		})
		setCurrentGuess('')
  };

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // submit word
      if (turn > 5) {
        console.log("no more guesses available");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("already tried this word", currentGuess);
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("word is not long enough");
        return;
      }
      // if (currentGuess is actual word from api) {}

      const formatted = formatGuess();
      console.log(formatted);
      addNewGuess(formatted);
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
          return prev + key.toUpperCase();
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
