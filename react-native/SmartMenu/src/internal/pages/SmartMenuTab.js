import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import SmartMenuCategory from './SmartMenuCategory';
import SmartMenuList from './SmartMenuList';
 import { StackNavigator } from 'react-navigation';

// class SmartMenuTab extends React.Component {
    
//     render() { 
//         return (
//             <View>
//                 <Text>
//                     SmartMenu
//                 </Text>
//                 <Button
//                     onPress={() => this.props.navigation.navigate('DetailDish')}
//                     title="Go to Details"
//                 />
//             </View>
//         ) 
//     }
// }

const SmartMenuTab = StackNavigator({
    SmartMenuCategory: { screen:  SmartMenuCategory},
    SmartMenuList: { screen: SmartMenuList },
});

export default SmartMenuTab;