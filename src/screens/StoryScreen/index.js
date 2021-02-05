import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Dimensions, ImageBackground, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

import storiesData from '../../data/storiesData'
const StoryScreen = () => 
{
    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setactiveStoryIndex] = useState(null);
    const [activeStory, setactiveStory] = useState(null);

    const route = useRoute();

    useEffect(() => {
        const userId = route.params.userId;
        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        setUserStories(userStories)
        setactiveStoryIndex(0)
        
    }, []);
    
    useEffect(() => {
        if(!userStories) {
            return;
        }
        if(activeStoryIndex < 0) {
            setactiveStoryIndex(0)
            return;
        }
        if(activeStoryIndex >= userStories.stories.length) {
            setactiveStoryIndex( userStories.stories.length - 1)
            return;
        }

        // if(userStories && userStories.stories.length > activeStoryIndex - 1) {
            setactiveStory(userStories.stories[activeStoryIndex]);
        // }
        
    }, [activeStoryIndex])
    
    const handleNextStory = () => {
        setactiveStoryIndex( activeStoryIndex + 1 );
    }

    const handlePrevStories = () => {
        setactiveStoryIndex( activeStoryIndex - 1 );
    }

    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        let isRight = true;
        if(x < screenWidth / 2) {
            handlePrevStories();
        } else {
            handleNextStory();
            console.log("isRight"+ isRight)
        }
        
    }

    if(!activeStory) {
        return (
            <SafeAreaView>
               <ActivityIndicator />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>    
                <TouchableWithoutFeedback onPress={handlePress}>
                    <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image}>

                    </ImageBackground>
                </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}
export default StoryScreen;

//https://youtu.be/NkwMT3O4NE0?t=4665
