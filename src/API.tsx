import { shuffleArray } from "./Utilities";

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: any
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const offlineEndpoint = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

  const data = await (
    await fetch(navigator.onLine ? endpoint : offlineEndpoint)
  ).json();

  console.log(data);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchCategory = async () => {
  if (navigator.onLine) {
    const endpoint = `https://opentdb.com/api_category.php`;
    const data = await (await fetch(endpoint)).json();

    return data.trivia_categories;
  } else {
    const offlineData: { id: number; name: string }[] = [
      {
        id: 9,
        name: "General Knowledge",
      },
    ];
    return offlineData;
  }
};
