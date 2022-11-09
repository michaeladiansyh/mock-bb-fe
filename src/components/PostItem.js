import React, { useEffect, useRef, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaThumbsUp } from 'react-icons/fa';
import profilePhoto from '../assets/img/profile-photo.svg';
import ThumbsUp from '../assets/img/ThumbsUp.svg';
import Comment from '../assets/img/Comment.svg';
import Share from '../assets/img/Share.svg';
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

const PostItem = ({ post }) => {
  const [isClickedMenuPost, setisClickedMenuPost] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(post.content);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsEdit(false);
      setisClickedMenuPost(false);
    }
  };

  const updatePost = async (id) => {
    try {
      const response = await axios.patch(`${BASE_URL}posts/${id}`, {
        content: content,
      });
      if (response.status === 200) {
        alert('Post Updated');
        setIsEdit(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}posts/${id}`);
      if (response.status === 200) {
        alert('Posts Deleted');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPost = (id) => {
    setisClickedMenuPost(false);
    updatePost(id);
  };

  return (
    <div
      className="relative rounded-lg bg-white w-full min-h-[50%] mt-4"
      key={post._id}>
      {isEdit ? (
        <div className="flex flex-col ml-9 mt-8 mb-5 mr-5" ref={ref}>
          <textarea
            placeholder="Say something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="block resize-none rounded-lg bg-white w-full h-48 font-Montserrat p-4 border-2"></textarea>
          <button
            onClick={() => handleEditPost(post._id)}
            className="rounded-lg relative bg-blue-700 w-full h-14 font-Montserrat text-white mt-5">
            Update
          </button>
        </div>
      ) : (
        <div className="flex flex-col ml-9 mt-5 mb-5 mr-5">
          <div className="flex">
            <img src={profilePhoto} alt="profile" />
            <div className="pl-4">
              <p className="text-base font-semibold text-blue-800">
                Mike Tyson
              </p>
              <p className="text-xs">45 mins ago</p>
            </div>
          </div>
          <div className="mt-3 ml-2 tracking-wide">
            <pre className="font-Montserrat whitespace-pre-wrap">
              {post.content}
            </pre>
          </div>
        </div>
      )}
      <button
        className="absolute top-2 right-4 text-gray-400"
        onClick={() => setisClickedMenuPost((prevState) => !prevState)}>
        <HiDotsHorizontal />
      </button>
      {isClickedMenuPost && !isEdit && (
        <div className="absolute top-6 right-4 list-none bg-white shadow-lg w-20">
          <ul className="py-1">
            <li>
              <button
                className="block w-full text-start py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsEdit((prevState) => !prevState)}>
                Edit
              </button>
            </li>
            <li>
              <button
                className="block w-full text-start py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => deletePost(post._id)}>
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
      <div className="flex justify-end mr-6 mb-5">
        <button className="mr-6">
          <img src={ThumbsUp} alt="Like Icon" />
        </button>
        <button className="mr-6">
          <img src={Comment} alt="Like Icon" />
        </button>
        <button className="mr-6">
          <img src={Share} alt="Like Icon" />
        </button>
      </div>
    </div>
  );
};

export default PostItem;
