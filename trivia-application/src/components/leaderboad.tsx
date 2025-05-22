type ScoreEntry = {
  name: string;
  score: number;
  category: string;
  difficulty: string;
  timestamp: string;
};

const Leaderboard = () => {
  const allScores: ScoreEntry[] = JSON.parse(
    localStorage.getItem("trivia_scores") || "[]"
  );

  const top5 = allScores.sort((a, b) => b.score - a.score).slice(0, 5);

  return (
    <div>
      <h2>Leaderboard</h2>
    </div>
  );
};

export default Leaderboard;
