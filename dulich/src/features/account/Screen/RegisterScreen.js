import React, { Component} from 'react';
import {ImageBackground, StyleSheet, Button,View, TextInput, TouchableOpacity, Text  } from 'react-native';

import BackgroundLogin from '../../../../assets/BackgroundLogin.png';

export default class  BackgroundAccount extends Component {
  render() {
    return (
      <ImageBackground
      source={BackgroundLogin}
      style={styles.Background}>
        
        <View style={styles.viewText}>
          <TextInput
            style={styles.inpuText}
            placeholder="Email."
            placeholderTextColor="#003f5c"
          />
        </View>
 
        <View style={styles.viewText}>
          <TextInput
            style={styles.inpuText}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          /> 
        </View>


        <View style={styles.viewText}>
          <TextInput
            style={styles.inpuText}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          /> 
        </View>

        <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISter</Text>
      </TouchableOpacity>

      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  Background: {
    flex : 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewText: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  
  },
  space: {
    width: '40%',
    height: 20
  },
  inpuText:{
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#CCE7CA",
  },

});




























