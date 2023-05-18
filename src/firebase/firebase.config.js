// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7jHyzWDcW6SXmSNql9hf9tkw2Rs5BHMo",
  authDomain: "toy-ta-f816b.firebaseapp.com",
  projectId: "toy-ta",
  storageBucket: "toy-ta.appspot.com",
  messagingSenderId: "803285389060",
  appId: "1:803285389060:web:58b7812c6d6f68a1b54a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;