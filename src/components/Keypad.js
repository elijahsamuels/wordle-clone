import React, { useState, useEffect } from "react";

function Keypad() {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((response) => response.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return <div className="keypad">
		{letters && letters.map((letter) => {
			return <div key={letter.key}>{letter.key}</div>;
		})}
		</div>;
}

export default Keypad;
