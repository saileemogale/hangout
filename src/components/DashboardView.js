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
  Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Sidebar from './Sidebar';
import moment from 'moment';
import DashboardDetails from './DashboardDetails';


export default class DashboardView extends React.Component {
  constructor(props){
      console.log("in constructor Dashboard View")
      super(props);
      console.log(props)
      this.state = { accessToken: null, 
                    currentDate: moment(new Date()).format('Do MMMM YYYY'), 
                    currentTime: moment(new Date()).format('LT'),
                    roomsList: this.props.roomsList,
                    roomDetails: this.props.roomDetails
                   }
      AsyncStorage.getItem('accessToken').then((token) => {
        if(token != null){
          this.state.accessToken = token
          this.props.fetchAllRooms(token, props.user.mail)
        }
      });
      console.log("accessToken from AsyncStorage")
      console.log(this.state.accessToken)
  }

  componentWillReceiveProps(nextProps){
    this.state.roomsList = nextProps.roomsList
    this.setState({ roomDetails: nextProps.roomDetails })
    console.log("in componentWillReceiveProps")
    console.log(this.state)
  }


  render() {
    console.log("in Dashboard View")
    console.log(this.state.roomDetails);
    var that = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("LeftNavigation")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Bookings</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
            {
                this.state.roomsList.map(function (room) {
                  console.log(room)
                  return (
                    <Tab heading={room.name}>
                      
                      <DashboardDetails {...that.props} roomId={room.address} roomName={room.name} roomDetails={that.state.roomDetails} />
                      
                    </Tab>
                  )
                })
            }
          </Tabs>
          <Footer>
            <Text>{this.state.currentTime}</Text>
            <Text></Text>
            <Text>{this.state.currentDate}</Text>
          </Footer>

      </Container>

    );
  }
}
