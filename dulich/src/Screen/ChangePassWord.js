import React from 'react';

import {View,Text,Image, Pressable, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ChangePassWord = () =>{
    const [fullName, setFullName] = React.useState('Nguyễn Đức Hảo');
    const [email, setEmail] = React.useState('duchao3003@gmail.com');
    const [phoneNumber, setPhoneNumber] = React.useState('0799792465');


    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.logo}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style = {Styles.logo}
                />
            </View>
            <KeyboardAwareScrollView>
                <View style={Styles.cardInfo}>
                    <TextInput
                        style={Styles.inputText}
                        onChangeText = {setFullName}
                        value={fullName}
                        placeholder="Họ và tên..."
                    />
                    <TextInput
                        style={Styles.inputText}
                        onChangeText = {setEmail}
                        value={email}
                        placeholder="Email..."
                    />
                    <TextInput
                        style={Styles.inputText}
                        onChangeText = {setPhoneNumber}
                        value={phoneNumber}
                        placeholder="Số điện thoại..."
                    />
                </View>
            </KeyboardAwareScrollView>
            <View style={Styles.button}>
                <Pressable onPress={()=>{print(fullName+" "+ email+ " "+ phoneNumber)}} style={Styles.buttonUpdate}>
                    <Text style={Styles.textButton}>Cập nhật thông tin</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor: '#ADD8E6',
        flex:1,
    },
    logo:{
        alignItems:"center",
    },
    cardInfo:{
        flex:3,
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        justifyContent:'center',
        elevation: 14,
    },
    button:{
        alignItems:'center',
        marginTop:20,
        marginBottom: 30,
    },
    buttonUpdate:{
        borderRadius:20,
        padding:18,
        backgroundColor: 'white',
        width: '70%',
        alignItems:'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize:18,
    },
    inputText:{
        margin: 10,
        borderRadius: 20,
        borderColor: "black",
        padding:15,
        borderWidth:1,
    },
});

export default ChangePassWord;