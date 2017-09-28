import React, { Component } from 'react';
import {View, Text} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
 
export default class HomePage extends Component {
  render() {
    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
        
     
      <BottomNavigation
        labelColor="white"
        rippleColor="black"
        style={{ height: 66, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => {}}
      >
        <Tab
        activeLabelColor="#D32F2F"
        labelColor="grey"
        barBackgroundColor="#FFCDD2"
          label="Smart Menu"
          icon={<Icon size={24} color="grey" name="web" />}
          activeIcon={<Icon size={24} color="#D32F2F" name="web" />}
        />
        <Tab
        activeLabelColor="#689F38"
        labelColor="grey"
        barBackgroundColor="#CCFF90"
          label="Special Menu"
          icon={<Icon size={24} color="grey" name="local-offer" />}
          activeIcon={<Icon size={24} color="#689F38" name="local-offer" />}
        />
        <Tab
        activeLabelColor="#0097A7"
        labelColor="grey"
        barBackgroundColor="#B2EBF2"
          label="Profile"
          icon={<Icon size={24} color="grey" name="perm-identity" />}
          activeIcon={<Icon size={24} color="#0097A7" name="perm-identity" />}
        />
      </BottomNavigation>
      </View>
    )
  }
}