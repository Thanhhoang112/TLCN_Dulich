import  React, {useState} from 'react';
import { Text, View, StyleSheet,Button,Image,TextInput,TouchableOpacity } from 'react-native';
import axios, { Axios } from 'axios';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { set } from 'react-native-reanimated';


const Login = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const LoginPress = ()=>{
    Axios.post("https://localhost:3001/login",
    {
      username: username,
      password: Password
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    })
  }




  return (
    <View style={styles.container}>
         <KeyboardAwareScrollView style={{
  flex: 1
}}>
        <View style={styles.Logo}>
            <Image source = {require('../../assets/Logo.png')}/>
        </View>

        <View style={styles.TitleView}>
            <Text style={styles.Title}> Đăng nhập tài khoản </Text>
        </View>

        <View >
            <TextInput style={styles.Input} placeholder="Tên đăng nhập"
            onChange={(e)=>{setUsername(e.target.value)}} 
            />
            
            
            
            <TextInput style={styles.Input} placeholder="Mật Khẩu"
            onChange={(e)=>{setPassword(e.target.value)}} 
            />
        </View>
        
        <View style={styles.LoginButtonView}>
            <TouchableOpacity style={styles.LoginButton} onClick={LoginPress}>
                <Text style={styles.LoginButtonText}
                      > Đăng nhập</Text>
            </TouchableOpacity>
        </View>


        <View >
            <TouchableOpacity style={styles.LoginButton}
              onPress={() => {navigation.push('SignUp')}}>
                <Text style={styles. SignUpText}> Đăng ký tài khoản </Text>
            </TouchableOpacity>
        </View>
        <View >
            <Text>{loginStatus}</Text>
        </View>
        </KeyboardAwareScrollView>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99FFFF',
    
  },
  Logo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25

  },
  TitleView:{
    textAlign: 'center',
    marginBottom: 18
  },
  Title:{
    textAlign: 'center',
    fontSize: 20,
  },
  InputView:{
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute', 
    top: 0,
    left: 5,
    right: 5
  },
  Input:{
    height: 60,
    padding: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'white',
  },

  LoginButtonView:{
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 40,
    margin: 30
  },

  LoginButtonText:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  SignUpText:{
    fontSize: 15,
    color: "#444444",
    fontWeight: "normal",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default Login;