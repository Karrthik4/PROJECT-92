import React from 'react';
//import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddRemindersScreen from '../screens/AddRemindersScreen';
import AllRemindersScreen from '../screens/AllRemindersScreen';

export const AppTabNavigator = createBottomTabNavigator({
    AddReminder : {
      screen: AddRemindersScreen,
      /*navigationOptions :{
        tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Donate Books",
      }*/
    },
    AllReminder: {
      screen: AllRemindersScreen,
      /*navigationOptions :{
        tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Book Request",
      }*/
    }
  });