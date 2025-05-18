import { useEffect, useState } from "react";
import { fetchTriviaQuestions } from "./utils/fetchtrivia";
import { shuffleArray } from "./utils/shuffle";
import type { TriviaQuestion } from "./utils/fetchtrivia";
import Quiz from "./components/quiz";
import QuizResults from "./components/quizresult";

function App() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchTriviaQuestions().then((data) => {
      setQuestions(data);
      setSelectedAnswer(new Array(data.length).fill(""));
      setLoading(false);
    });
  }, []);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const updated = [...selectedAnswer];
    updated[questionIndex] = answer;
    setSelectedAnswer(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newScore = 0;
    questions.forEach((q, i) => {
      if (selectedAnswer[i] === q.correct_answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Trivia Quiz</h1>
      {loading ? (
        <p>Loading...</p>
      ) : submitted ? (
        <QuizResults score={score} total={questions.length} />
      ) : (
        <Quiz
          questions={questions}
          selectedAnswer={selectedAnswer}
          onAnswerChange={handleAnswerChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
