import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Logout"];

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    console.log("in sidebar constructor")
    console.log(props)
  }
  
  render() {
    return (
      <Container>
        <Content>
          <Button>Logout</Button>
        </Content>
      </Container>
    );
  }
}
