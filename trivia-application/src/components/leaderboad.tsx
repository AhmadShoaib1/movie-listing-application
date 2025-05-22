import {useEffect, useState} from "react"

type ScoreEntry = {
  name: string;
  score: number;
  category: string;
  difficulty: string;
  timestamp: string;
};

const Leaderboard = () => {
    const [scores, setScores] = useState<ScoreEntry[]>([]);
    useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem("trivia_scores") || "[}");
    setScores(stored);
    }, []);



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
