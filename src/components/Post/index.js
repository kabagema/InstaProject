import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import {View} from 'react-native';

const Post = ({post}) => (
  <>
    <View>
      <Header imageUri={post.user.image} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer likesCount={post.likes} caption={post.caption} postedAt={post.createdAt}/>
    </View>
  </>
);

export default Post;
