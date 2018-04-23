import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Drawer from './src/components/Drawer';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1, backgroundColor: '#e6ffff' }}>
      <Drawer />
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
 );

AppRegistry.registerComponent('albums', () => App);
