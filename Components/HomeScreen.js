import {View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AddedItem from './AddedItem';


const HomeScreen = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <AddedItem />
    </View>
  );
};

export default HomeScreen;

