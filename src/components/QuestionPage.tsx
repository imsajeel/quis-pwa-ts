import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { fetchQuestions, QuestionState } from "../API";
import Loading from "./Loading";
import { motion } from "framer-motion";

type Props = {
  userData: any;
};

const TOTAL_QUESTION = 10;

type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const QuestionPage: React.FC<Props> = ({ userData }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<answerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTION,
      userData.difficulty,
      userData.category
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const nextQuestion = async () => {
    const nextNumber = number + 1;

    if (nextNumber === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextNumber);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  return (
    <motion.div
      animate={{
        scale: [0.9, 1],
        opacity: [0, 1],
      }}
      className="text-center md:p-10"
    >
      <h1 className="text-3xl mb-5 text-gray-700">
        <b>Quiz</b>
      </h1>

      {questions.length !== 0 && userAnswers.length === questions.length ? (
        <motion.div
          animate={{
            translateX: [1000, 0],
            opacity: [0, 1],
          }}
          className="text-xl bg-blue-100 border-solid border-2 border-blue-500 w-1/2 m-auto p-2 rounded-full text-blue-500"
        >
          Your score is :
          <b>
            {" "}
            {score}/{TOTAL_QUESTION}
          </b>
          <br />
          Which is
          <b> {(score * 100) / TOTAL_QUESTION}%</b>
        </motion.div>
      ) : null}

      {gameOver || userAnswers.length === TOTAL_QUESTION ? (
        <div className="w-full text-center mb-5 mt-5">
          <div className="text-gray-700 text-2xl mb-5 mt-10">
            Hello <b> Mr. {userData.name}</b> Let's start uQuizy.
          </div>
          <button
            className=" w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            onClick={startQuiz}
          >
            {userAnswers.length === TOTAL_QUESTION ? "Try again" : "Begin Quiz"}
          </button>
        </div>
      ) : null}

      {loading ? <Loading /> : null}
      {!loading && !gameOver ? (
        <QuestionCard
          questionNum={number + 1}
          totalQuestion={TOTAL_QUESTION}
          question={questions[number]?.question}
          answers={questions[number]?.answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          cardDisplay={questions.length !== userAnswers.length ? true : false}
        />
      ) : null}
      {!gameOver &&
      !gameOver &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTION - 1 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full text-center"
        >
          <button
            className={`w-1/2 bg-blue-500 active:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={nextQuestion}
          >
            Next
          </button>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default QuestionPage;
