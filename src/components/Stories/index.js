import React from 'react';
import Story from '../Story';
import {FlatList} from 'react-native';
import styles from './styles';

const data = [
 
  {
    imageUri:
      'https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
    name: 'Lukas',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    name: 'Ron',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Igor',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
    name: 'Vanessa',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
    name: 'Ingrid',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60',
    name: 'Queen',
  },
];
const Stories = () => (
  <FlatList
    style={styles.container}
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
    showsHorizontalScrollIndicator={false}
  />
);

export default Stories;
