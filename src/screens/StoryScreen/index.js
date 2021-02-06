import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import Camera from 'react-native-vector-icons/Feather';
import Paper from 'react-native-vector-icons/Ionicons';

import {
  ActivityIndicator, Dimensions,
  ImageBackground, SafeAreaView,
  Text,
  TextInput, TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import storiesData from '../../data/storiesData';
import ProfilePicture from '../../components/ProfilePicture';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setactiveStoryIndex] = useState(null);
  // const [activeStory, setactiveStory] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  useEffect(() => {
    const userStories = storiesData.find(
      (storyData) => storyData.user.id === userId,
    );
    setUserStories(userStories);
    setactiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const navigateToPrevUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setactiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setactiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={handlePress}>
            <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image}>
                <View style={styles.userInfo}>
                  <ProfilePicture uri={userStories.user.imageUri} size={45} />
                  <Text style={styles.userName}>{userStories.user.name}</Text>
                  <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
                </View>

                <View style={styles.bottomContainer}>
                  <View style={styles.cameraButton}>
                    <Camera name="camera" size={30} color={'#ffffff'} />
                  </View>
                    
                  <View style={styles.textInputContainer}>
                    <TextInput 
                        editable  placeholder="Send message"  
                        style={styles.textInput} placeholderTextColor={"white"}
                    />
                  </View>

                  <View style={styles.messageButton}>
                    <Paper name="paper-plane-outline" size={31} color={'#ffffff'} />             
                  </View>

                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default StoryScreen;

//https://youtu.be/NkwMT3O4NE0?t=4665
