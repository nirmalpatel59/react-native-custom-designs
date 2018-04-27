import React, { Component } from 'react';
import { DrawerLayoutAndroid, FlatList, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Drawer extends Component {
  static drawerRef;
  static openDrawer() {
<<<<<<< HEAD
    drawerRef.openDrawer()
=======
    drawerRef.openDrawer();
>>>>>>> 5d007bde801969b58cc90938d27da0818eed0ee2
  }

  setDrawerRef(ref) {
    drawerRef = ref;
  }

  render() {
<<<<<<< HEAD
    const data = [{ key: 'first menu', icon: 'home', screen: 'home' }, { key: 'second menu' }, { type: 'separator' }, { 'key': 'settings' }]
    
    var navigationView = (
      <View style={{padding: 16}}>
        <FlatList
          data={data}
          renderItem={({ item }, index) => {
            if (item.type === 'separator') {
              return (
                <View style={{ height: 0.5, backgroundColor: 'gray' }} />
              )
            }
            return (
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Icon name={item.icon} size={15} color="gray" />
                <Text key={index}>{item.key}</Text>
              </View>
            )
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
=======
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
>>>>>>> 5d007bde801969b58cc90938d27da0818eed0ee2
}
export default Drawer;
