import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzUa8sXuHW01Cvybb1M_RQoeORRIjBkFg",
  authDomain: "fir-login-ts.firebaseapp.com",
  projectId: "fir-login-ts",
  storageBucket: "fir-login-ts.appspot.com",
  messagingSenderId: "707051060726",
  appId: "1:707051060726:web:492512f6b5740734739bd7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// ログインオプションのポップが出るようになる
const provider = new GoogleAuthProvider();

export { auth, provider };
