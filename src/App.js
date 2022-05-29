import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  // useEffect(() => {

  //   fetch("https://scrabble.p.rapidapi.com/hello/definitions", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      // .then(json => setSolution(json));
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word.toUpperCase());
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
