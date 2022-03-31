// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCtJZbkpUc5wT0zGgaBfxnyo6qyYxhvCso",
  authDomain: "amazo2612n.firebaseapp.com",
  projectId: "amazo2612n",
  storageBucket: "amazo2612n.appspot.com",
  messagingSenderId: "938056365765",
  appId: "1:938056365765:web:f2e71dba9fbd827d9ba2ac",
  measurementId: "G-7X18Z9P1NT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
