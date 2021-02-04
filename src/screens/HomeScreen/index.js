import React from 'react';
import Stories from '../../components/UserStoriesPreview';
import Feed from '../../components/Feed';
import { SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  );
};

export default HomeScreen;
