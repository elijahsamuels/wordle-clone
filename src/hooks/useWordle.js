import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {};

  const addNewGuess = () => {};

  const handleKeyup = ({ key }) => {

		if (key === 'Backspace'){
			setCurrentGuess((prev) => {
				return prev.slice(0, -1)
			})
			return
		}
		if(/^[a-zA-Z]$/.test(key)){
			if(currentGuess.length < 5) {
				setCurrentGuess((prev) => {
					return prev + key
				})
			}

		}
	};

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;