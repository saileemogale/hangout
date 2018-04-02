import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LoginStyle from '../styles'
import { Container, Header, Content, Button, Text } from 'native-base';
import { ReactNativeAD, ADLoginView } from 'react-native-azure-ad'
import AuthContainer from '../containers/AuthContainer';
import LoginView from './LoginView'

export default class Auth extends React.Component {
  constructor(props){
    console.log("in Auth component")
    console.log(props)
    super(props);
    
  }

  render() {
    console.log("in Azure login")
    return (
        <AuthContainer>
          <LoginView {...this.props}/>
        </AuthContainer>

    )
  }
}
