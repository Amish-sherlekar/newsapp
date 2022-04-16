import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import ExploreScreen from '../Screens/ExploreScreen';
import SavedNews from '../Screens/SavedNews';
import { Ionicons } from '@expo/vector-icons';
import TopTabNavigation from './TopTabNavigation';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#32dc32',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontFamily: 'Fira Code iScript',
                        fontSize: 15,
                    },
                    drawerStyle: {
                        width: '80%',
                        backgroundColor: '#fff',
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },

                }}>
                <Drawer.Screen
                    name="Home"
                    component={TopTabNavigation}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="SavedNews"
                    component={SavedNews}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="ios-save" size={22} color={color} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}