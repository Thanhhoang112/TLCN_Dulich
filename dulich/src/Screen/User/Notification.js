import * as React from 'react';
import { Text, View, StyleSheet,Button,Image,TextInput,TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Notification = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Bạn chưa có thông báo nào</Text>
        </View>
    )
}

export default Notification;