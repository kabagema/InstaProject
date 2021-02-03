import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Heart from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/Fontisto';
import Paper from 'react-native-vector-icons/Ionicons';
import Bookmark from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount, caption, postedAt}) => 
(
    <View style={styles.container}>
        <View style={styles.iconsContainer}>
            <View style={styles.leftIcons}>
                <Heart name="hearto" size={27} />
                <Comment name="comment" size={25} />
                <Paper name="paper-plane-outline" size={27} />       
            </View>

            <Bookmark name="bookmark-o" size={27} />
        </View>

        <Text style={styles.likes}>
            {likesCount} Likes
        </Text>
        <Text  style={styles.caption}>
            {caption}
        </Text>
        <Text style={styles.postedAt}>
            {postedAt}
        </Text>
    </View>
)

export default Footer;