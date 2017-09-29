import React, { Component } from 'react';
import { Button } from 'react-native';
import  {  NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TabNavigator } from 'react-navigation';
import ProfileTab from './ProfileTab';
import SmartMenuTab from './SmartMenuTab';
import SpecialMenuTab from './SpecialMenuTab';
 
const HomePage = TabNavigator({
  SmartMenuTab: { screen: SmartMenuTab },
  SpecialMenuTab: { screen: SpecialMenuTab },
  ProfileTab: { screen: ProfileTab }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor:"grey",      
      rippleColor: 'black',
      tabs: {
        SmartMenuTab: {
          activeLabelColor: "#D32F2F",
          barBackgroundColor: "#FFCDD2",
          label: "Smart Menu",
          icon: <Icon size={24} color="grey" name="web" />,
          activeIcon: <Icon size={24} color="#D32F2F" name="web" />,
        },
        SpecialMenuTab: {
          activeLabelColor: "#689F38",
          barBackgroundColor: "#CCFF90",
          label: "Special Menu",
          icon: <Icon size={24} color="grey" name="local-offer" />,
          activeIcon: <Icon size={24} color="#689F38" name="local-offer" />,
        },
        ProfileTab: {
          label: 'Profile',
          icon: <Icon size={24} color="grey" name="perm-identity" />,
          activeLabelColor: "#0097A7",
          barBackgroundColor:"#B2EBF2",
          activeIcon: <Icon size={24} color="#0097A7" name="perm-identity" />,      
        }
      }
    }
  }
});

HomePage.navigationOptions = ({ navigation }) => ({
  header: (
    <Button
      onPress={() => navigation.navigate('AboutRestaurant')}
      title="Taste with Me"
    />
  ),
});

export default HomePage;
