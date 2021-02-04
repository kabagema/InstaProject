import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';
import  styles from "./styles"

const data = [
  {
    id: '1',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      name: 'Lukas',
    },
    imageUri:
      'https://images.unsplash.com/photo-1536632856133-3a3441454dd5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
    caption: 'Alexa, Play welcome to Miami',
    likesCount: 1255,
    postedAt: '1 hour ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      name: 'Ron',
    },
    imageUri:
      'https://images.unsplash.com/photo-1536632856133-3a3441454dd5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
    caption: 'Alexa, Play welcome to Miami',
    likesCount: 1255,
    postedAt: '1 hour ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Igor',
    },
    imageUri:'https://images.unsplash.com/photo-1539081034274-b9991e9829d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
    caption: 'Morning breeze',
    likesCount: 1255,
    postedAt: '1 week ago',
  },
  {
    id: '4',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Vanessa',
    },
    imageUri: 'https://images.unsplash.com/photo-1583133010801-0b9802ae9c17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1964&q=80',
    caption: 'Ancient Aesthetic >>>>',
    likesCount: 1255,
    postedAt: '6 hours ago',
  },
  {
    id: '5',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Queen',
    },
    imageUri: 'https://images.unsplash.com/photo-1474518551598-147ee65f265e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Eye of the world',
    likesCount: 1255,
    postedAt: '1 month ago',
  },
];

const Feed = () => (
  <>
    <FlatList
        data={data}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={({id}) => id}
        ListHeaderComponent={Stories}

    />
  </>
);

export default Feed;
