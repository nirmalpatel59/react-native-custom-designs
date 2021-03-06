import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Drawer from './Drawer';
import { theme } from '../utitlities/color-palette';

const Header = () => {
   const { viewStyle, headerView, iconView, textStyle } = styles;
   return (
      <View style={headerView}>
        <TouchableNativeFeedback onPress={() => Drawer.openDrawer()}>
          <View style={iconView}>
            <Icon name="menu" size={30} color={theme.primary.fontColor} />
          </View>
        </TouchableNativeFeedback>
        <View style={viewStyle}>
          <Text style={textStyle}>Albums</Text>
        </View>
        <View style={iconView} />
      </View>
    );
 };

const styles = {
  headerView: {
    backgroundColor: theme.primary.bgNormal,
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
    fontSize: 24,
    color: theme.primary.fontColor
  }
};
export default Header;
