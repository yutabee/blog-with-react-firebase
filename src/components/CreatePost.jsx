// import { Button } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import './CreatePost.css';

export const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  const createPost = async () => {
    // console.log(title);
    // console.log(postText);
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });

    navigate('/');
  };

  return (
    <>
      <div className="createPostPage">
        <div className="postContainer">
          <h1>記事を投稿する</h1>
          <div className="inputPost">
            <div>タイトル</div>
            <input type="text" placeholder='タイトルを記入' onChange={(e)=>setTitle(e.target.value)} />
          </div>
           <div className="inputPost">
            <div>投稿</div>
            <textarea placeholder='投稿内容を記入' onChange={(e)=>setPostText(e.target.value)}></textarea>
          </div>
          <button className='postButton' onClick={createPost}>投稿する</button>
          {/* <Button variant="contained">投稿する</Button> */}
        </div>
      </div>
    </>
  );
};
