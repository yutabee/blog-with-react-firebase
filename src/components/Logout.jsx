import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export const Logout = ({ setIsAuth })=>{
  const navigate = useNavigate();
  const logout = () => {
    //Logout
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <>
      <div>
        <p>ログアウトする</p>
        <button onClick={logout}>ログアウト</button>
      </div>
    </>
  );
};
