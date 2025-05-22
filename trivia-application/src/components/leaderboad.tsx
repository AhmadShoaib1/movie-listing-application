import { useEffect, useState } from "react";

type ScoreEntry = {
  name: string;
  score: number;
  category: string;
  difficulty: string;
  timestamp: string;
};

const Leaderboard = () => {
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("trivia_scores") || "[]");
    setScores(stored);
  }, []);

  const top5 = scores.sort((a, b) => b.score - a.score).slice(0, 5);
  return (
    <div>
      <h2>Leaderboard (Top 5)</h2>
      {top5.length === 0 ? (
        <p>No quiz results yet.</p>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {top5.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.category}</td>
                <td>{entry.difficulty}</td>
                <td>{new Date(entry.timestamp).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
