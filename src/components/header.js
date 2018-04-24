import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Drawer from './Drawer'

const Header = (props) => {
   const { viewStyle, headerView, iconView, textStyle } = styles
   return (
      <View style={headerView}>
        <TouchableNativeFeedback onPress={() => Drawer.openDrawer()}>
          <View style={iconView}>
            <Icon name="menu" size={30} color="#000" />
          </View>
        </TouchableNativeFeedback>
        <View style={viewStyle}>
          <Text style={textStyle}>Albums</Text>
        </View>
        <View style={iconView}>
        </View>
      </View>
    )
 }

const styles = {
  headerView: {
    backgroundColor: '#f8f8f8',
    // justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 6,
    position: 'relative',
    flexDirection: 'row'
  },
  iconView: {
    padding: 16,
    width: 72,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
  }
}
export default Header
