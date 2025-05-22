type Props = {
  score: number;
  total: number;
  onRestart: () => void;
};

const QuizResults: React.FC<Props> = ({ score, total, onRestart }) => {
  return 
  (
    <div>
      <h2>Results</h2>
      <p>You scored {score} out of {total}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  )
};

export default QuizResults;
