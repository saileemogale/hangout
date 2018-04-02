import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LoginStyle from '../styles'
import { Container, Header, Content, Button, Text } from 'native-base';
import { ReactNativeAD, ADLoginView } from 'react-native-azure-ad'
import { StackNavigator } from 'react-navigation';


export default class Landing extends React.Component {
  constructor(props){
      super(props);
      console.log("in landing constructor")
      console.log(props)
      this._handleLoginClick = this._handleLoginClick.bind(this)
  }

  _handleLoginClick(){
    this.props.navigation.navigate('Auth')
  }

  render() {
    console.log("in render")
    return (
      <TouchableOpacity onPress={this._handleLoginClick}>
        <Image
          source={require('../assets/hang-on-backdrop.png')}>
        </Image>
      </TouchableOpacity>
    );
  }
}
