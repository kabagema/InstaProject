import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import {View} from 'react-native';

const Post = ({post}) => (
  <>
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri}/>
      <Footer likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt}/>
    </View>
  </>
);

export default Post;
