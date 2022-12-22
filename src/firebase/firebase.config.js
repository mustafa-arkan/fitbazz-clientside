// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtIUe39E5RVUXhRl-Q4H90MiR4sZL_jCM",
  authDomain: "fitbazz-client.firebaseapp.com",
  projectId: "fitbazz-client",
  storageBucket: "fitbazz-client.appspot.com",
  messagingSenderId: "29875236536",
  appId: "1:29875236536:web:61547ff6ed4dbd4bf78e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app