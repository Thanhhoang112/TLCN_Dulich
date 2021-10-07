import React, { Component } from 'react';
import {ImageBackground, StyleSheet, Button } from 'react-native';

import BackgroundLogin from '../../../../assets/BackgroundLogin.png';

export default class  CoverButton extends Component {
  render() {
    return (
      <Button
       title="Login"
      style={{
        backgroundColor : 'red',
        position : "absolute",
     }}>
      </Button>
    );
  }
}



