import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Story from '../UserStoryPreview';
import storiesData from "../../data/storiesData";

const Stories = () => (
  <FlatList
    style={styles.container}
    data={storiesData}
    keyExtractor={({name}) => name}
    horizontal
    renderItem={({item}) => <Story story={item} />}
    showsHorizontalScrollIndicator={false}
  />
);

export default Stories;
