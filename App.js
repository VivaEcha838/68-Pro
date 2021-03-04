import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fb from './screens/fb'
import insta from './screens/insta'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
      
    </View>
  );
  }
}

var AppNavigator = createBottomTabNavigator({
  fb:fb,
  insta:insta
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
