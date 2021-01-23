self.importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
self.importScripts(
  "https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDB1qxG-HwC_X7Ra8F2yIkOJVua6tpzKc4",
  authDomain: "quiz-app-ts-bd482.firebaseapp.com",
  projectId: "quiz-app-ts-bd482",
  storageBucket: "quiz-app-ts-bd482.appspot.com",
  messagingSenderId: "290963897191",
  appId: "1:290963897191:web:183c5c5ae03a0253ff4dc2",
});

firebase.messaging();
