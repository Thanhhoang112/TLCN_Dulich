import React, { Component } from 'react';
import {ImageBackground, StyleSheet, Button,View, TouchableOpacity } from 'react-native';

import BackgroundLogin from '../../../../assets/BackgroundLogin.png';

export default class  BackgroundAccount extends Component {
  render() {
    return (
      <ImageBackground
      source={BackgroundLogin}
      style={styles.Background}>

      <View         
      style={styles.cover}>
        <Button title="Login" style={styles.button}></Button>
        
        <View style={styles.space}></View>
        
        <Button title="Register" style={styles.button}></Button>    
         
      </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  Background: {
    flex : 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cover: {
    backgroundColor : 'white',
    position : 'absolute'
  
  },
  space: {
    width: '40%',
    height: 20
  },
  button:{
    width: "90%", margin: 10
  }

});




























