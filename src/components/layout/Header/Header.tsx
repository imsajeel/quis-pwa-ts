import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-500 flex justify-center items-center"
    >
      <h1
        className="text-white text-2xl m-3 md:mx-10 cursor-pointer flex-1"
        onClick={() => window.location.reload()}
      >
        uQuizy?
      </h1>
      <div className="text-white text-4xl m-3 md:mx-10 cursor-pointer">
        <a
          href="https://github.com/imsajeel/quiz-ts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
    </motion.div>
  );
}
