import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class SmartMenuList extends React.Component {
    
    render() { 
        return (
            <View>
                <Text>
                    SmartMenu List
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('DetailDish')}
                    title="Go to Details"
                />
            </View>
        ) 
    }
}

export default SmartMenuList;