import React from "react";

function Row({ guess, currentGuess }) {
  if (guess !== undefined) {
    return (
      <div className="row past">
        {guess.map((letter, index) => {
          return (
            <div key={index} className={letter.color}>
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="row current">
        {letters.map((letter, index) => (
          <div key={index} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((value, index) => {
          return <div key={index}></div>;
        })}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Row;
