import React, { Component } from 'react';
import {ImageBackground, StyleSheet } from 'react-native';

import BackgroundLogin from '../../../../assets/BackgroundLogin.png';
export default class BackgroundAccount extends Component {
  render() {
    return (
      <ImageBackground
      source={BackgroundLogin}
      style={styles.container}
      ></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});



















