import firebase from "firebase/app";
import "firebase/database";

const config = {
    // API KEYS
    apiKey: "AIzaSyCJ1dF5b2jwLz0Euu53YhDcYJYSxMLcavA",
    authDomain: "chatapp-69eac.firebaseapp.com",
    projectId: "chatapp-69eac",
    storageBucket: "chatapp-69eac.appspot.com",
    messagingSenderId: "372986150144",
    appId: "1:372986150144:web:e5629e9d5ec9677c4507e5",
    measurementId: "G-8VMPMQE7BV"
};

const db = firebase.initializeApp(config);
export default db;