export type TriviaQuestion = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
};

export const fetchTriviaQuestions = async (): Promise<TriviaQuestion[]> => {
  const res = await fetch("https://opentdb.com/api.php?amount=10");
  const data = await res.json();

  if (data.response_code !== 0) {
    throw new Error("Failed to fetch trivia questions");
  }
  

  return data.results;
};
export function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

