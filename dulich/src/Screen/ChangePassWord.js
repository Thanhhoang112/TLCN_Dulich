import React from 'react';
import {View,Text,Image, Pressable, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Appbar } from 'react-native-paper';
const ChangePassWord = () =>{
    const [oldPassword, setOldPassWord] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');


    return(
        <SafeAreaView style={Styles.container}>
            <Appbar.Header statusBarHeight ={20}>
                <Appbar.BackAction onPress={() => {}} />
                <Appbar.Content title="Thay đổi mật khẩu"/>
            </Appbar.Header>
             <KeyboardAwareScrollView>
            <View style={Styles.logo}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style = {Styles.logo}
                />
            </View>
           
                <View style={Styles.cardInfo}>
                    <Text style={Styles.title}>Mật khẩu cũ</Text>
                    <TextInput
                        secureTextEntry
                        style={Styles.inputText}
                        onChangeText = {setOldPassWord}
                        placeholder="Mật khẩu cũ..."
                    />
                    <Text style={Styles.title}>Mật khẩu mới</Text>
                    <TextInput
                        secureTextEntry
                        style={Styles.inputText}
                        onChangeText = {setNewPassword}
                        placeholder="Mật khẩu mới..."
                    />
                    <Text style={Styles.title}>Nhập lại mật khẩu mới</Text>
                    <TextInput
                        secureTextEntry
                        style={Styles.inputText}
                        onChangeText = {setRepeatPassword}                       
                        placeholder="Nhập lại mật khẩu..."
                    />
                </View>
           
            <View style={Styles.button}>
                <Pressable onPress={()=>{console.log(oldPassword+" "+ newPassword+ " "+ repeatPassword)}} style={Styles.buttonUpdate}>
                    <Text style={Styles.textButton}>Xác nhận</Text>
                </Pressable>
            </View>
            </KeyboardAwareScrollView>
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
    title:{
        fontSize:18,
        fontWeight: 'bold',
    },
});

export default ChangePassWord;