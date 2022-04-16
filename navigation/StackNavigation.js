import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../Screens/NewsScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import ExploreScreen from '../Screens/ExploreScreen';

const Stack = createStackNavigator();

const navigation = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
    }}>
       <Stack.Screen name="NewsScreen" component={NewsScreen} />
       <Stack.Screen name="SortScreen" component={ExploreScreen} />
    </Stack.Navigator>
  );
}

export default navigation;