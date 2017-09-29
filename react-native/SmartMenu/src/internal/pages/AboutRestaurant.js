import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class AboutRestaurant extends React.Component {
    render() { 
        return (
            <View>
                <Text>
                    About Restaurant
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('SmartMenuList')}
                    title="Go to Smart Menu List"
                />
            </View>
        )  
    }
}

export default AboutRestaurant;