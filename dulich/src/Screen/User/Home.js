import * as React from 'react';
import { Text, View, StyleSheet,Button,Image,TextInput,TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Home = () => {
    return(
        <View style={styles.container}>
          
          <View style={styles.BeachImage}>
            <Image source = {require('../../../assets/Beach.png')}/>
        </View>

        </View>
    )
        
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f2ff'
    },
    BeachImage:{
        flexDirection: 'column',
        alignItems: 'center',
    }
})



export default Home;