import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import Drawer from './src/components/Drawer';

const App = () => (
  <Drawer>
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  </Drawer>
 );

AppRegistry.registerComponent('albums', () => App);
