import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, ImageBackground, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
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
        if(userStories && userStories.stories.length > activeStoryIndex - 1) {
            setactiveStory(userStories.stories[activeStoryIndex]);
        }
        
    }, [activeStoryIndex])
    
    if(!activeStory) {
        return (
            <SafeAreaView>
               <ActivityIndicator />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image} />

        </SafeAreaView>
    );
}
export default StoryScreen;
