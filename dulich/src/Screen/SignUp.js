import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View,SafeAreaView,Text,Button,StyleSheet,KeyboardAvoidingView } from "react-native";
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Feather as Icon} from "@expo/vector-icons"


import {  BackgroundAccount,
          CoverLogo ,
          LoginTitle,
          CoverBackInSignUp,
          CoverSignUpInput,
          SignUpInput,
          CoverTitleSignup,
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
    <CoverBackInSignUp Style={{paddingTop: 10}}>
        <AntDesignIcon  name="arrowleft" style={{fontSize: 30,}}/>
        </CoverBackInSignUp>   
    <CoverTitleSignup>      
        <LoginTitle>Đăng ký tài khoản</LoginTitle>
    </CoverTitleSignup>

    <CoverSignUpInput>
    
    <SignUpInput
        label ="Tên đăng nhập" 
    />
    
    <SignUpInput
        label ="Mật khẩu"
        secureTextEntry
    />

    <SignUpInput
    label ="Nhập lại mật khẩu"
    secureTextEntry
    />  

    <SignUpInput
        label="Địa chỉ Email" 
        />  
        
    <SignUpInput
        label="Số điện thoại"
        />  

    <SignUpInput
    label="Bạn là..."
    /> 
    <CoverLoginButton>
        <Button title="Đăng ký"/>
    </CoverLoginButton>
    </CoverSignUpInput>
        </KeyboardAwareScrollView>
    </BackgroundAccount>
    );
}


export default Login;