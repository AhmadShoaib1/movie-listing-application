import React from "react";
import { shuffleArray } from "../utils/shuffle";
import type { TriviaQuestion } from "../utils/fetchtrivia";

type Props = {
  questions: TriviaQuestion[];
  selectedAnswer: string[];
  onAnswerChange: (index: number, answer: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

const Quiz: React.FC<Props> = ({
  questions,
  selectedAnswer,
  onAnswerChange,
  onSubmit,
}) => {
  if (!questions || questions.length === 0) {
    return <p>No questions to show.</p>;
  }
  return (
    <form onSubmit={onSubmit}>
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
                  onChange={() => onAnswerChange(index, opt)}
                />
                <span dangerouslySetInnerHTML={{ __html: opt }} />
              </label>
            ))}
          </div>
        );
      })}
      <button type="submit">Submit Answers</button>
    </form>
  );
};

export default Quiz;
