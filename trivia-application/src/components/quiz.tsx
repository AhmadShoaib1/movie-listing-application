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
    <form onSubmit={onSubmit}
    className="max-w-3xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow">
      {questions.map((q, index) => {
        const options = shuffleArray([
          q.correct_answer,
          ...q.incorrect_answers,
        ]);

        return (
          <div key={index}
          className="p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">
            <p className="font-semibold mb-2" dangerouslySetInnerHTML={{ __html: q.question }} />
            {options.map((opt, i) => (
              <label key={i} className="block mb-1">
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
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-4">Submit Answers</button>
    </form>
  );
};

export default Quiz;
