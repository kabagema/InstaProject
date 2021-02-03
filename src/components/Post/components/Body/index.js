import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const Body = ({imageUri}) => (

  <>
    <View>
      <Image source={{uri: imageUri}} style={styles.image} />
    </View>
  </>

);

export default Body;
