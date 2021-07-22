import { authService, firebaseInstance } from "myBase";
import React, { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        ></input>
        <input
          type="submit"
          value={newAccount ? "Create Accoount" : "Sign In"}
        ></input>
        <span onClick={toggleAccount}>
          {newAccount ? "Sign In" : "Create Account"}
        </span>
        <p>{error}</p>
      </form>
      <div>
        <button onClick={onSocialClick} name="google">
          구글 로그인
        </button>
        <button onClick={onSocialClick} name="github">
          깃허브 로그인
        </button>
      </div>
    </div>
  );
}

export default Auth;
