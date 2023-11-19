// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeS1rivEdzLLPcbOPIrn6v8SAUcVdNbZY",
  authDomain: "coffee-shop-52178.firebaseapp.com",
  projectId: "coffee-shop-52178",
  storageBucket: "coffee-shop-52178.appspot.com",
  messagingSenderId: "493508444580",
  appId: "1:493508444580:web:489b22bac200d4b5134131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;