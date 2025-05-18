type Props = {
  score: number;
  total: number;
};

const QuizResults: React.FC<Props> = ({ score, total }) => {
  return <p>You scored {score} out of {total}</p>;
};

export default QuizResults;
