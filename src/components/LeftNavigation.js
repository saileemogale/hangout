import React, { Component } from 'react';
import { Drawer } from 'native-base';
import Sidebar from './Sidebar';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";

export default class LeftNavigation extends Component {
  render() {
    return (
      <ListItem
        button
        onPress={() => this.props.navigation.navigate({routeName:"Auth", params: {name: 'logout'}})}
      >
        <Text>Logout</Text>
      </ListItem>
    );
  }
}
