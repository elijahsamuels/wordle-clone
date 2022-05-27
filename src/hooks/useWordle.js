import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

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
      return prevTurn + 1;
    });

		setUsedKeys((prevUsedKeys) => {
			let newKeys = {...prevUsedKeys}

			formattedGuess.forEach((letter) => {
				const currentColor = newKeys[letter.key]

				if (letter.color === 'green'){
					newKeys[letter.key] = 'green'
					return
				}
				if (letter.color === 'yellow' && currentColor !== 'green'){
					newKeys[letter.key] = 'yellow'
					return
				}
				if (letter.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow'){
					newKeys[letter.key] = 'grey'
					return
				}
			})
			return newKeys
		})

    setCurrentGuess("");
  };

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // submit word
      if (turn > 5) {
        return;
      }
      if (history.includes(currentGuess)) {
        return;
      }
      if (currentGuess.length !== 5) {
        return;
      }
      // if (!officalScrabble5LetterWordArray.includes(currentGuess)) { don't submit word }

      const formatted = formatGuess();
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

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup };
};

export default useWordle;
