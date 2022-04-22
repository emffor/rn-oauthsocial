import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { Resume } from '../screens/Resume';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
            <Screen name="Dashboard" component={Dashboard} />
            <Screen name="Resume" component={Resume} />
        </Navigator>
    );
}