import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View,SafeAreaView,Text,Button,StyleSheet } from "react-native";
import { Formik } from 'formik';
import {Octicons} from '@expo/vector-icons';
import {  BackgroundAccount,
          CoverLogo ,
          LoginTitle,
          Logo,
          LoginInput,
          ForgotPassword,
          CoverLogin
                } from '../Component/Style';
import { TextInput } from 'react-native-paper';




//statusbar chua hoat dong
const Login = () => {
    return (
    < BackgroundAccount >
    <StatusBar style="Dark"/>   
        <CoverLogo>
            <Logo source = {require('../../assets/Logo.png')}/> 
            <LoginTitle>Tài Khoản Đăng Nhập</LoginTitle>
            
            <LoginInput
            
            placeholder="Tên đăng nhập" />
            
            <LoginInput
            icon='lock'
            placeholder="Mật khẩu" />
            
            <ForgotPassword >Quên mật khẩu?</ForgotPassword>

            <CoverLogin>
                <Button title="Đăng nhập"/>
            </CoverLogin>
            
            
        </CoverLogo>
        
    </BackgroundAccount>
    );
}


export default Login;