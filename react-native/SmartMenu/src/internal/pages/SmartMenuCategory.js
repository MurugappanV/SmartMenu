import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class SmartMenuCategory extends React.Component {
    
    render() { 
        return (
            <View>
                <Text>
                    SmartMenu Category
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('SmartMenuList')}
                    title="Go to Smart Menu List"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('DetailDish')}
                    title="Go to Details"
                />
            </View>
        ) 
    }
}

export default SmartMenuCategory;