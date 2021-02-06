import React from 'react';
import {FlatList} from 'react-native';

import styles from './styles';
import Story from '../UserStoryPreview';
import storiesData from '../../data/storiesData';

const Stories = () => (
  <FlatList
    style={styles.container}
    data={storiesData}
    renderItem={({item}) => <Story story={item} />}
    keyExtractor={({user: {id}}) => id}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);
export default Stories;
