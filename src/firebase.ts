// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvtKP2A6Z7X8-Y61KgZumBH-NjOAmAZjI",
    authDomain: "quiz-mania-225a8.firebaseapp.com",
    projectId: "quiz-mania-225a8",
    storageBucket: "quiz-mania-225a8.appspot.com",
    messagingSenderId: "628838742195",
    appId: "1:628838742195:web:0c850352a860466a1e98c6",
    measurementId: "G-8PKE746EB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };