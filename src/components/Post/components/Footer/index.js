import React, { useEffect, useState } from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Heart from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/Fontisto';
import Paper from 'react-native-vector-icons/Ionicons';
import Bookmark from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {

    const [IsLiked, setIsLiked] = useState(false);
    const [likesCount, setLikes] = useState(0);

    const onlikePressed = () => {  
        const amount = IsLiked ? -1 : 1;
        setLikes(likesCount + amount);

        setIsLiked(!IsLiked);
    }

    useEffect(() => {  
        setLikes(likesCountProp)   
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>

                    <TouchableWithoutFeedback onPress={onlikePressed}>
                        {IsLiked ? 
                            <Heart name="heart" size={27} color="red" />
                            :
                            <Heart name="hearto" size={27} />
                        }               
                    </TouchableWithoutFeedback>
                    
                    <Comment name="comment" size={25} />
                    <Paper name="paper-plane-outline" size={27} />
                </View>

                <Bookmark name="bookmark-o" size={27} />
            </View>
                <Text style={styles.likes}>{likesCount} Likes</Text>
                <Text style={styles.caption}>{caption}</Text>
                <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}
export default Footer;
