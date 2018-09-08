import React, {Component} from 'react';
import {TextInput, View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import * as actionCreators from '../action/actionCreators'
class LoginRedux extends Component{
  render()
  {
    return(

        <View style={styles.loginContainer}>
         <Image resizeMode="contain" style={styles.logo} source={require('./Image/Logo.png')} />
          <View style ={styles.loginForm}>
            <TextInput  style={styles.TextInput} width={300} maxLength={20} editable={true} placeholder="username"/>
            <TextInput style={styles.TextInput} placeholder="password"></TextInput>
            <TouchableOpacity  style={styles.buttonContainer} ><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
          </View>
        </View>
    );
  }
}

export default LoginRedux;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'relative',
        width: 300,
        height: 100
    },
    container: {
       padding: 20
      },
      input:{
          height: 40,
          backgroundColor: 'rgba(225,225,225,0.2)',
          marginBottom: 10,
          padding: 10,
          color: '#fff'
      },
      loginForm:
      {
        margin: 30
      },
      buttonContainer:{
          backgroundColor: '#2980b6',
          paddingVertical: 15,
          paddingHorizontal: 30
      },
      TextInput:
      {
            backgroundColor: '#F5FCFF',
            paddingVertical: 15,
            padding:30,
            marginBottom:10
      },
      buttonText:{
          color: '#fff',
          textAlign: 'center',
          fontWeight: '700'
      }})
