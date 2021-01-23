import React, { useState } from "react";
import NotFound from "./NotFound";
import { motion } from "framer-motion";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNum: number;
  totalQuestion: number;
  cardDisplay: boolean;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestion,
  cardDisplay,
}) => {
  const [selection, setSelection] = useState("");

  if (question) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`.container bg-gray-100 rounded-lg py-10 my-10 mx-auto shadow-lg px-5`}
        style={{ display: cardDisplay ? "block" : "none" }}
      >
        <p className="text-center text-gray-600">
          Quistion : {questionNum} / {totalQuestion}
        </p>
        <p
          className="font-semibold text-lg m-5"
          dangerouslySetInnerHTML={{ __html: "Q. &ensp;" + question }}
        />
        <div>
          {answers?.map((answer, index) => (
            <div
              key={index}
              className="w-full text-center my-5"
              onClick={() => setSelection(answer)}
            >
              <button
                className={`inline-block w-11/12 text-left ${
                  answer === selection
                    ? "bg-blue-500 text-white"
                    : "bg-transparent text-blue-700"
                } hover:bg-blue-500 focus:outline-none font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full`}
                disabled={userAnswer}
                value={answer}
                onClick={callback}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: index + 1 + ". &emsp; " + answer,
                  }}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        animate={{
          rotate: [0, 358, 362, 358, 362, 358, 362, 360],
          scale: [0, 1, 1, 1, 1, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 2000,
        }}
        className="container bg-gray-100 rounded-lg py-10 my-10 mx-auto shadow-lg"
      >
        <NotFound />
        No questions available in this section. Please try another!
        <div className="py-10">
          <button
            className={` bg-blue-500 active:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded`}
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </motion.div>
    );
  }
};

export default QuestionCard;
