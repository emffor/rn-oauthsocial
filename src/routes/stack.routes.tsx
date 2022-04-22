import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { Resume } from '../screens/Resume';

const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Resume" component={Resume} />
        </Stack.Navigator>
    );
}