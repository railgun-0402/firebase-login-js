import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = () => {
    setIsLoading(true);
    // FSを使用してログイン
    signInWithPopup(auth, provider)
      .then(() => {
        // サインインに成功した場合、インジケータ削除
        setIsLoading(false);
      })
      .catch((error) => {
        // サインインに失敗した場合も、インジケータ削除
        setIsLoading(false);
        console.error(error);
      });
  };

  // どのアカウントで認証してるか、状態を確認
  // nullなら未登録
  const [user] = useAuthState(auth);
  return (
    <div>
      {isLoading ? (
        // インジケータ表示
        <>
          <div className="spinner-container">
            <Spinner />
          </div>
          <div>Loading...</div>
        </>
      ) : // インジケータ非表示
      user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
};

export default Home;

// サインイン
function SignInButton({ signInWithGoogle }) {
  return (
    <button onClick={signInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
}

// サインアウト
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}

function UserInfo() {
  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt=""></img>
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
}
