import React from 'react';
import { Image, Text } from 'react-native';
import styles from '../../../ProfilePicture/styles';

const Body = ({ imageUri }) => 
(
    <>
    {console.log("Body",imageUri)}


    <Text>Body</Text>
    <Image source= {{imageUri}}  style={styles.image} />
   </>
)

export default Body;

