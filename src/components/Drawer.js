import React, { Component } from 'react';
import { DrawerLayoutAndroid, View, Text } from 'react-native';
// import axios from 'axios';
// import AlbumDetail from './AlbumDetail';

class Drawer extends Component {
    // state = { albums: [] };
    // componentWillMount() {
    //     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //     .then(response => this.setState({ albums: response.data }));
    // }
    // renderAlbums() {
    //     return this.state.albums.map(album => 
    //         <AlbumDetail album={album} key={album.title} />
    //     );
    // }
    render() {
      const navigationView = (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
        </View>
      );
      return (
        <DrawerLayoutAndroid 
        drawerWidth={300} 
        drawerPosition={DrawerLayoutAndroid.positions.Left} 
        renderNavigationView={() => navigationView}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
          </View>
        </DrawerLayoutAndroid>
      );
    }
}
export default Drawer;
