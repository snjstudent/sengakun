import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApctzpLt_hWqGwsMFH0DHJsd3Uz7IYhUo",
  authDomain: "sengakun-2a8a0.firebaseapp.com",
  databaseURL: "https://sengakun-2a8a0.firebaseio.com",
  projectId: "sengakun-2a8a0",
  storageBucket: "",
  messagingSenderId: "207291350851",
  appId: "1:207291350851:web:894cfe3af98fcf21"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
