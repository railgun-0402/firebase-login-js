import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  // どのアカウントで認証してるか、状態を確認
  // nullなら未登録
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Home;

// サインイン
function SignInButton() {
  const signInWithGoogle = () => {
    // FSを使用してログイン
    signInWithPopup(auth, provider);
  };

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
