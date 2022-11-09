import React, { useEffect, useRef, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

import axios from 'axios';
import PostItem from './PostItem';

const BASE_URL = 'http://localhost:4000/';

const Post = () => {
  const [isClickedPost, setIsClickedPost] = useState(false);

  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    getPosts();
  }, [posts]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsClickedPost(false);
    }
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}posts`);
      if (response.status === 200) {
        setPosts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post(`${BASE_URL}posts`, {
        content: content,
      });
      if (response.status === 201) {
        alert('Post Updated');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = () => {
    if (content.length !== 0) {
      createPost();
      setIsClickedPost(false);
      setContent('');
    } else {
      alert('field required');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-2/4 mx-auto mt-7 mb-5">
      <button
        onClick={() => setIsClickedPost((prevState) => !prevState)}
        className={
          isClickedPost
            ? 'hidden'
            : 'rounded-lg relative bg-white w-full h-14 font-Montserrat text-slate-400'
        }>
        What's on your mind, Mike?{' '}
        <BsArrowUp className="hidden sm:block absolute top-5 right-5" />
      </button>
      <div className="w-full" ref={ref}>
        <textarea
          placeholder="Say something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className={
            isClickedPost
              ? 'block resize-none rounded-lg bg-white w-full h-48 font-Montserrat p-4 border-2'
              : 'hidden'
          }></textarea>
        <button
          onClick={handlePost}
          className={
            isClickedPost
              ? 'rounded-lg relative bg-blue-700 w-full h-14 font-Montserrat text-white mt-5'
              : 'hidden'
          }>
          Post
        </button>
      </div>
      {posts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Post;
