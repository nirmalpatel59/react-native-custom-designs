import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'AlbumsNewDetails',
  };
  render() {
    return (
      <View>
        <Text>This is Detail Page</Text>
      </View>
    )
  }
}

export default DetailScreen
