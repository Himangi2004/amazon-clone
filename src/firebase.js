import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbBIS7HKyT6qRibkgzFvwrPWcLo6b5Pc8",
  authDomain: "clone-a5a96.firebaseapp.com",
  databaseURL: "https://clone-a5a96.firebaseio.com",
  projectId: "clone-a5a96",
  storageBucket: "clone-a5a96.appspot.com",
  messagingSenderId: "712960778925",
  appId: "1:712960778925:web:cc9987da46ded2f2d3dc24",
  measurementId: "G-WGH5NB0RQY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
