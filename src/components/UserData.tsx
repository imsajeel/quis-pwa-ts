import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { fetchCategory, Difficulty } from "../API";
import { motion } from "framer-motion";

type Props = {
  setRegistered: Function;
  setUser: Function;
};

type categoryArray = {
  id: number;
  name: string;
};

const UserData: React.FC<Props> = ({ setRegistered, setUser }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    name: "",
    difficulty: Difficulty.EASY,
    category: 9,
  });

  const onChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (values.name) {
      setUser(values);
      setRegistered(true);
    } else {
      alert("Please enter your name.");
    }
  };

  const fetchReq = async () => {
    const fetchedData = await fetchCategory();
    await setCategories(fetchedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchReq();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <motion.div
        initial={{ translateX: 1000, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=".container w-11/12 md:w-1/2 bg-gray-100 rounded-lg py-10 mx-auto my-10 p-5 shadow-lg"
      >
        <h1 className="text-center text-3xl">Quiz form</h1>
        <form onSubmit={onSubmit}>
          <label
            className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={onChange}
          />
          <label
            className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Select Difficulty
          </label>
          <div className="relative">
            <select
              name="difficulty"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={onChange}
            >
              <option value={Difficulty.EASY}>Easy</option>
              <option value={Difficulty.MEDIUM}>Medium</option>
              <option value={Difficulty.HARD}>Hard</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <label
            className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Select Subject
          </label>
          <div className="relative">
            <select
              name="category"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={onChange}
            >
              {categories.map((category: categoryArray, index) => {
                return (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div>
            <div className="w-full mt-5 text-center">
              <button
                style={{ width: "100%", maxWidth: "500px" }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enter
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    );
  }
};

export default UserData;
