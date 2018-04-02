import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import LoginStyle from '../styles'
import { Container, Header, Content, Button, Text } from 'native-base';
import { ReactNativeAD, ADLoginView } from 'react-native-azure-ad'

const CLIENT_ID = 'f2563c08-5780-4d2d-881a-6147498f9f7f'
const AUTH_URL = 'https://login.microsoftonline.com/common/oauth2/authorize'
const ADContext = new ReactNativeAD({
  client_id : CLIENT_ID,
  authority_host : AUTH_URL,
  client_secret : '5SYcECNkUCLFrbSgo4Q71+qYGdNGG7nVcMstoy6wgAU=',
  resources : [
  'https://graph.microsoft.com',
  ]
})

export default class LoginView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken: null,
      shouldLogout: false
    }
    console.log("in login constructor")
    console.log(this.props)
  }

  componentWillMount(){
    if(this.props.navigation.state.params && this.props.navigation.state.params.name == "logout"){
      this.setState({shouldLogout: true})
    }
  }

  _onLoginSuccess(cred) {
    console.log('user credential', cred)
    let accessToken = ADContext.getAccessToken('https://graph.microsoft.com')
    console.log(accessToken)
    AsyncStorage.setItem('accessToken', accessToken)
    this.props.azureLogin(accessToken)
  }

  render() {
    console.log("in Azure login")
    return (
        <ADLoginView
          key="webview"
          hideAfterLogin={true}
          style={{flex :1}}
          context={ADContext}
          needLogout={this.state.shouldLogout}
          onSuccess={this._onLoginSuccess.bind(this)}/>

    )
  }
}
