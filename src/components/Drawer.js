import React, { Component } from 'react';
import { DrawerLayoutAndroid, FlatList, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../utitlities/color-palette';

class Drawer extends Component {
  static drawerRef;
  static openDrawer() {
    drawerRef.openDrawer();
  }

  setDrawerRef(ref) {
    drawerRef = ref;
  }

  render() {
    const data = [
      { key: 'Home', icon: 'home', screen: 'home' },
      { key: 'Exam History', icon: 'history', screen: 'examHistory' },
      { key: 'Profile', icon: 'account-circle', screen: 'account' },
      { key: 'Settings', icon: 'settings', screen: 'settings' },
      { key: '', type: 'separator' },
      { key: 'About Us', icon: 'info', screen: 'aboutus' },
    ];
    const { 
      drawerStyle,
      drawerItemStyle,
      seperatorStyle,
      drawerHeader,
      drawerMenuStyle,
      drawerFlatList,
      drawerHeaderText
     } = styles;
    const navigationView = (
      <View style={drawerStyle}>
        <View style={drawerHeader}>
          <Text style={drawerHeaderText}>Nirmal Patel</Text>
        </View>
        <FlatList
          style={drawerFlatList}
          data={data}
          renderItem={({ item }, index) => {
            if (item.type === 'separator') {
              return (
                <View style={seperatorStyle} />
              );
            }
            return (
              <View style={drawerItemStyle}>
                <Icon name={item.icon} size={24} color="gray" />
                <Text style={drawerMenuStyle} key={index}>{item.key}</Text>
              </View>
            );
          }}
        />
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
const styles = {
  drawerFlatList: {
    
  },
  drawerStyle: {
     flexDirection: 'column'
  },
  drawerHeader: {
    height: 80,
    justifyContent: 'center',
    paddingLeft: 16,
    backgroundColor: theme.primary.bgNormal
  },
  drawerHeaderText: {
    fontSize: 24,
    color: theme.primary.fontColor
  },
  drawerItemStyle: { 
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center'
  },
  seperatorStyle: {
    height: 0.5,
    backgroundColor: 'gray'
  },
  drawerIconStyle: {
  },
  drawerMenuStyle: {
    fontSize: 16,
    marginLeft: 32
  }
};
export default Drawer;
