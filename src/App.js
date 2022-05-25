import { useState, useEffect } from "react";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
		.then((res) => res.json())
    // .then((json) => {console.log(json);});
    .then(json => setSolution(json));
  }, []);
console.log(solution);
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
    </div>
  );
}

export default App;
