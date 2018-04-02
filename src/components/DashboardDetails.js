import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import LoginStyle from '../styles'
import { Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Drawer,
  Card,
  CardItem,
  Tab, Tabs, TabHeading, ScrollableTab, List, ListItem } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Sidebar from './Sidebar';
import moment from 'moment'


export default class DashboardDetails extends React.Component {
  constructor(props){
      console.log("in constructor Dashboard Details")
      super(props);

      console.log(props)
      this.state = { accessToken: null, currentDate: moment(new Date()).format('Do MMMM YYYY'), currentTime: moment(new Date()).format('LT'),
                    roomDetails: this.props.roomDetails}
      AsyncStorage.getItem('accessToken').then((token) => {
        if(token != null){
          this.state.accessToken = token
          if(this.props.roomId){
              this.props.fetchRoomDetails(token, this.props.roomId, this.props.roomName)
          }
        }
      });
      console.log("accessToken from AsyncStorage")
      console.log(this.state.accessToken)
      
  }

  componentWillReceiveProps(nextProps){
    this.setState({roomDetails:  nextProps.roomDetails })
    console.log("in componentWillReceiveProps")
    console.log(this.state)
  }


  render() {
    console.log("in Dashboard details")
    console.log(this.state);
    var that = this;
    return (
      <Container>
        <List>
        {
          Object.keys(this.props.roomDetails).length > 0 ? (
              Object.keys(this.state.roomDetails).map((key) => (

                 <ListItem>
                   {console.log("in roomDetails list")}
                   {console.log(that.state.roomDetails[key].organizer)}
                   <span></span>
                   <Text>{that.state.roomDetails[key].organizer.emailAddress.name}</Text>
                   <Text>{`${moment(that.state.roomDetails[key].start.dateTime).utcOffset(+660).format('Do MMM, h:mm a')} - ${moment(that.state.roomDetails[key].end.dateTime).utcOffset(+660).format('h:mm a')}`}</Text>
                </ListItem>
              ))
            ) : ('')
        }
        </List>
      </Container>

    );
  }
}
