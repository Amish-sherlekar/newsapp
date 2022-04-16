import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}
        >
        <ImageBackground
        //   source={require('../assets/images/bg.jpeg')}
        //   source={require('../assets/images/bg2.jpg')}
        //   source={require('../assets/images/bg3.jpg')}
        //   source={require('../assets/images/bg4.jpg')}
        //   source={require('../assets/images/bg5.jpg')}
        //   source={require('../assets/images/bg6.jpg')}
        //   source={require('../assets/images/bg7.jpg')}
        //   source={require('../assets/images/bg8.jpg')}
        //   source={require('../assets/images/bg9.jpg')}
        //   source={require('../assets/images/bg10.jpg')}
          source={require('../assets/images/bg11.png')}
        //   source={require('../assets/images/bg12.jpg')}
        //   source={require('../assets/images/bg13.jpg')}
          style={{ height: 210, top: -10 }}>
          {/* <Image
            source={require('../assets/images/logo.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          /> */}
          
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Fira Code iScript',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Fira Code iScript',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;