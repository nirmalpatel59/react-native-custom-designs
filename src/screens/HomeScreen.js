import React, { Component } from 'react';
import { View, Button } from 'react-native';
import AlbumList from '../components/AlbumList';
import Drawer from '../components/Drawer';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'AlbumsNew',
    headerLeft: (<Button title="Go" onPress={() => Drawer.openDrawer()} />)
  };
  render() {
    return (
      <View>
        <Button title="Go To Detail Page" onPress={() => this.props.navigation.navigate('Detail')} />
        <AlbumList />
      </View>
    )
  }
}

export default HomeScreen
