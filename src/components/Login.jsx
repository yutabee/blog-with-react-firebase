import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/');
    });
  }

  return (
    <>
      <div>
        <p>ログインして始める</p>
        <button onClick={loginInWithGoogle}>Googleでログイン</button>
      </div>
    </>
  );
};
