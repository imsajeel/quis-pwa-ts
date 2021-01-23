import React, { useEffect, useState } from "react";
import QuestionPage from "./components/QuestionPage";
import UserData from "./components/UserData";
import "./tailwind.output.css";
import Layout from "./components/layout";
import firebase from "./firebase";

export default function App() {
  const [registered, setRegistered] = useState(false);
  const [user, setUser] = useState({});

  const messaging = firebase.messaging();

  useEffect(() => {
    console.log("use effect is runnning...");
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token: string) => {
        alert(token);
        prompt("token", token);
        console.log("token", token);
      })
      .catch((err: any) => console.log("error", err));
  }, [messaging]);

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
