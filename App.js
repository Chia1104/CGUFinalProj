import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostScreen from './src/screens/PostScreen';
import SettingsScreen from './src/screens/SettingsScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import DcardDetailScreen from './src/screens/DcardDetailScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.screenTop}>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenTop: {
    height: 30
  },
});
