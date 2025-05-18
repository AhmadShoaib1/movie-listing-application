import { useEffect } from "react";

const fetchTriviaQuestions = async () => {
  const response = await fetch("https://opentdb.com/api.php?amount=10");
  const data = await response.json();

  if (data.response_code !== 0) {
    throw new Error("Failed to fetch trivia questions.");
  }

  console.log(data.results);
};

function App() {
  useEffect(() => {
    fetchTriviaQuestions();
  }, []);

  return (
    <div>
      <h1>Trivia App</h1>
    </div>
  );
}

export default App;
