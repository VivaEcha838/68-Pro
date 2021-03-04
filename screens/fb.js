import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class fb extends React.Component{
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.textStyle}>
                    Facebook!
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle: {
      flex: 1,
      fontSize: 25,
      fontFamily: 'fantasy',
      fontWeight: 30,
      alignText: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      

    },
  });