import { useEffect } from "react";
import { fetchTriviaQuestions, shuffleArray } from "./utils/fetchtrivia";
import type { TriviaQuestion } from "./utils/fetchtrivia";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  useEffect(() => {
    fetchTriviaQuestions()
      .then((data) => {
        setQuestions(data);
        setSelectedAnswer(new Array(data.length).fill(""));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleOptionChange = (questionIndex: number, answer: string) => {
    const updatedAnswers = [...selectedAnswer];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswer(updatedAnswers);
  }
  return (
    <div>
      <h1>Trivia Quiz</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form>
          {questions.map((q, index) => {
            const options = shuffleArray([
              q.correct_answer,
              ...q.incorrect_answers,
            ]);

            return (
              <div key={index}>
                <p dangerouslySetInnerHTML={{ __html: q.question }} />
                {options.map((opt, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={opt}
                      checked={selectedAnswer[index] === opt}
                      onChange={() => handleOptionChange(index, opt)}
                    />
                    <span dangerouslySetInnerHTML={{ __html: opt }} />
                  </label>
                ))}
              </div>
            );
          })}
        </form>
      )}
    </div>
  );
}

export default App;
