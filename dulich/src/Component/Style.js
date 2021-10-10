import react from "react";
import { Button, TextInput } from "react-native-paper";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, InputText } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";


//background for login and register page
export const BackgroundAccount = styled.View`
flex: 1;
justify-content: center;
background-color: powderblue;
`;

export const CoverLogo = styled.View`
    flex: 1;
    width: 100%;
    padding-top: 35px;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 450px;
    height: 200px;
   
    
`;


export const LoginTitle= styled.Text`
font-size: 18px;
margin-bottom: 20px;
letter-spacing: 1px;
font-weight: bold;
color: black;
align-items: center;
`;

export const LoginInput = styled(TextInput)`
width: 290px;
height: 50px;
padding-top: 4px;
padding-left: 5px;
padding-right: 20px;
border-radius: 5px;
font-size:16px;
margin-vertical:3px;
margin-bottom: 10px;
`;

export const ForgotPassword = styled.Text`
font-size: 16px;
padding-left:165px;
letter-spacing: 1px;
font-weight: bold;
color: cornflowerblue;
`;

export const CoverLogin = styled.View`
padding-top:1px;
width: 80%;
`;

export const SignUpInput = styled(TextInput)`
width: 290px;
height: 65px;
padding-top: 4px;
padding-left: 5px;
padding-right: 20px;
border-radius: 5px;
font-size:16px;
margin-vertical:3px;
margin-bottom: 10px;
`;

export const CoverSignUp = styled.View`
padding-top:30px;
width: 90%;

`;















 