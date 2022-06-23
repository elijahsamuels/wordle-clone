import React, { useState, useEffect } from "react";
import wordsObject from "../wordsObject";

function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/letters")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setLetters(json);
  //     });
  // }, []);

	useEffect(() => {
		setLetters(wordsObject.letters)
	}, [setLetters])

  return (
    <div className="keypad">
      {letters && letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}

export default Keypad;
