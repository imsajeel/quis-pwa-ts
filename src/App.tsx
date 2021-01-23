import React, { useState } from "react";
import QuestionPage from "./components/QuestionPage";
import UserData from "./components/UserData";
import "./tailwind.output.css";
import Layout from "./components/layout";

export default function App() {
  const [registered, setRegistered] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div>
      <Layout>
        {!registered ? (
          <UserData setRegistered={setRegistered} setUser={setUser} />
        ) : (
          <QuestionPage userData={user} />
        )}
      </Layout>
    </div>
  );
}
