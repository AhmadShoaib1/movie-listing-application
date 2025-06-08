import { useEffect, useState } from "react";
import Quiz from "./components/quiz";
import QuizResults from "./components/quizresult";
import type { TriviaQuestion } from "./utils/fetchtrivia";
import type { QuizSettings } from "./components/settings";
import SettingsForm from "./components/settings";
import Leaderboard from "./components/leaderboad";

function App() {
  const [settings, setSettings] = useState<QuizSettings | null>(null);
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!settings) return;

    const { amount, category, difficulty, type } = settings;

    let url = `https://opentdb.com/api.php?amount=${amount}`;
    if (category) url += `&category=${category}`;
    if (difficulty !== "any") url += `&difficulty=${difficulty}`;
    if (type !== "any") url += `&type=${type}`;

    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.response_code !== 0 || !Array.isArray(data.results) || data.results.length === 0 ){
          throw new Error ("no question foind on the selected settings");
        }

        setQuestions(data.results);
        setSelectedAnswer(new Array(data.results.length).fill(""));
        setLoading(false);
      })
      .catch((err)=>{
        console.error("fetch failed", err);
        setError(err.message || "something went wrong");
        setLoading(false)
      })

  }, [settings]);

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

    const result = {
      name: settings?.name || "Anonymous",
      score: newScore,
      category: settings?.category || "Any",
      difficulty: settings?.difficulty || "any",
      timestamp: new Date().toISOString(),
    };
    

    const existing = JSON.parse(localStorage.getItem("trivia_scores") || "[]");
    const updated = [...existing, result];
    localStorage.setItem("trivia_scores", JSON.stringify(updated));
  };

  const handleRestart = () => {
    setSettings(null);
    setQuestions([]);
    setSelectedAnswer([]);
    setScore(0);
    setSubmitted(false);
    setLoading(false);
  };


  return (
    <div>
      <h1>Trivia Quiz</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!settings ? (
        <SettingsForm onSubmit={setSettings} />
      ) : loading ? (
        <p>Loading...</p>
      ) : submitted ? (
        <QuizResults
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      ) :!questions || questions.length === 0 ? (
        <p>No quiz data available.</p>
      ) : (
        <Quiz
          questions={questions}
          selectedAnswer={selectedAnswer}
          onAnswerChange={handleAnswerChange}
          onSubmit={handleSubmit}
        />
      )}
  
      <Leaderboard />
    </div>
  );
  
}

export default App;
