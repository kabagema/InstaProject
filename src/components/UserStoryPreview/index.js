import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import ProfilePicture from '../ProfilePicture';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Story = (props) => {
  const {
    story: {
      user: {id, imageUri, name},
    },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
