import React, { Component } from 'react';
import { DrawerLayoutAndroid, View, Text } from 'react-native';

class Drawer extends Component {
  static drawerRef;
  static openDrawer() {
    drawerRef.openDrawer();
  }

  setDrawerRef(ref) {
    drawerRef = ref;
  }

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
      ref={ref => this.setDrawerRef(ref)}
    >
      {this.props.children}
    </DrawerLayoutAndroid>
  );
}
}
export default Drawer;
