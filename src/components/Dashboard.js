import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LoginStyle from '../styles'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import DashboardContainer from '../containers/DashboardContainer';
import DashboardView from './DashboardView'


export default class Dashboard extends React.Component {
  constructor(props){
      console.log("in constructor Dashboard")
      super(props);
  }


  render() {
    console.log("in Dashboard")
    return (
      <DashboardContainer>
        <DashboardView {...this.props} />
      </DashboardContainer>
    );
  }
}
