import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../../ProfilePicture/styles';

const Body = ({imageUri}) => (
  <>
    {console.log('Body: url =>', imageUri)}
    <Text>Body</Text>
    <View>
      <Image source={{imageUri}} style={styles.image} />
    </View>
  </>
);

export default Body;
