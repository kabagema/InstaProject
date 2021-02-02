import React from 'react';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const post = {
  user: {
    imageUri:
      'https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
    name: 'Lukas',
  },
  imageUri: {
    uri:
      'https://images.unsplash.com/photo-1612132445096-8d82a1960718?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
};

const HomeScreen = () => {
  return (
    <>
      <Stories />
      <Post post={post} />
    </>
  );
};

export default HomeScreen;
