import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View,SafeAreaView,Text,Button,StyleSheet,TouchableOpacity } from "react-native";
import { Formik } from 'formik';
import {Octicons} from '@expo/vector-icons';
import {  BackgroundAccount,
          CoverLogo ,
          LoginTitle,
          Logo,
          SignUpInput,
          ForgotPassword,
          CoverSignUp
                } from '../Component/Style';
import { TextInput } from 'react-native-paper';




//statusbar chua hoat dong
const SignUp = () => {
    return (
    < BackgroundAccount >
    <StatusBar style="Dark"/>   
        <CoverLogo>
            
            <LoginTitle>Đăng ký tài khoản</LoginTitle>
            
            <SignUpInput
            label="Tên đăng nhập"
            placeholder="Tên đăng nhập" />
            
            <SignUpInput
            label="Mật khẩu"
            placeholder="Mật khẩu" />

            <SignUpInput
            label="Nhập lại Mật Khẩu"
            placeholder="Nhập lại Mật khẩu" />

            <SignUpInput
            label="Địa chỉ Email"
            placeholder="Địa chỉ Email" />

            <SignUpInput
            label="Số điện thoại"
            placeholder="Số điện thoại" />

            <SignUpInput
            label="Đối tượng"
            placeholder="Bạn là...." />


            <CoverSignUp>
            <TouchableOpacity >
            <Button  title="Đăng ký"/>
            </TouchableOpacity>
            </CoverSignUp>
            
            
        </CoverLogo>
        
    </BackgroundAccount>
    );
}



export default SignUp;