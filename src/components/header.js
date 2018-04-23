import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
    const { viewStyle, textView, textStyle, iconView } = styles;
    return (
        <View style={viewStyle}>
            <View style={iconView}>
                <Icon name="menu" size={30} color="#fff" />
            </View>
            <View style={textView}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
            <View style={iconView} />
        </View>
        
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#00c9cc',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 6,
        position: 'relative',
        flexDirection: 'row'
    },
    iconView: {
        width: 72,
        padding: 12,
        alignItems: 'center'
    },
    textView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    }
};
export default Header;
