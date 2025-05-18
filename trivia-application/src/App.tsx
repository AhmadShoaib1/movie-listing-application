import { useEffect } from "react";
import { fetchTriviaQuestions } from "./utils/fetchtrivia";
import type { TriviaQuestion } from "./utils/fetchtrivia";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTriviaQuestions()
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Trivia Quiz</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {questions.map((q, idx) => (
            <li key={idx}>
              <strong dangerouslySetInnerHTML={{ __html: q.question }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
