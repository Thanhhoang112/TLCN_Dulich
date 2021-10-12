import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View,SafeAreaView,Text,Button,StyleSheet } from "react-native";
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Feather as Icon} from "@expo/vector-icons"


import {  BackgroundAccount,
          CoverLogo ,
          LoginTitle,
          Logo,
          CoverLoginInput,
          LoginInput,
          ForgotPassword,
          CoverLogin,
          CoverLoginButton,
                } from '../Component/Style';
import { TextInput } from 'react-native-paper';




//statusbar chua hoat dong
const Login = () => {
    return (
    < BackgroundAccount >
      <KeyboardAwareScrollView style={{
  flex: 1
}}>
    <StatusBar style="Dark"/> 
    <CoverLogo>
        <Logo source = {require('../../assets/Logo.png')}/>
        <LoginTitle>Tài Khoản Đăng Nhập</LoginTitle>
    </CoverLogo>

    <CoverLoginInput>
       
    <LoginInput
        icon="mail"
        placeholder="Tên đăng nhập"
    />
    <LoginInput
    placeholder="Mật khẩu"
    secureTextEntry
    />
    <ForgotPassword >Quên mật khẩu?</ForgotPassword>
    <CoverLoginButton>
        <Button title="Đăng nhập"/>
    </CoverLoginButton>
    </CoverLoginInput>
    </KeyboardAwareScrollView>
    </BackgroundAccount>
    );
}


export default Login;