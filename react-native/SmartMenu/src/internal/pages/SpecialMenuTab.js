import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class SpecialMenuTab extends React.Component {

    render() { 
        return (
            <View>
                <Text>
                    Special Menu
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('DetailDish')}
                    title="Go to Details"
                />
            </View> 
        ) 
    }
}

export default SpecialMenuTab;