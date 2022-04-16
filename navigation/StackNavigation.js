import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../Screens/NewsScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import BusinessScreen from '../NewsScreen/Business';
import EntertainmentScreen from '../NewsScreen/Entertainment';
import HealthScreen from '../NewsScreen/Health';
import ScienceScreen from '../NewsScreen/Science';
import SportsScreen from '../NewsScreen/Sports';
import TechnologyScreen from '../NewsScreen/Technology';

const Stack = createStackNavigator();

const navigation = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="NewsScreen" component={NewsScreen} />
       <Stack.Screen name="Home" component={ExploreScreen} />
       <Stack.Screen name="Business" component={BusinessScreen} />
       <Stack.Screen name="Entertainment" component={EntertainmentScreen} />
       <Stack.Screen name="Health" component={HealthScreen} />
       <Stack.Screen name="Science" component={ScienceScreen} />
       <Stack.Screen name="Sports" component={SportsScreen} />
       <Stack.Screen name="Technology" component={TechnologyScreen} />
    </Stack.Navigator>
  );
}

export default navigation;