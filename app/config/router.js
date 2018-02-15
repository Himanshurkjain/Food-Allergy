/* eslint-disable react/prop-types */

import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Restaurants';
import Me from '../screens/Allergies';
import Details from '../screens/RestaurantDetails';
import { DrawerButton } from '../components/Header';
import MenuDetails from "../screens/MenuDetails";


const LeftDrawerButton = ({ navigate }) => {
  if (Platform.OS === 'android') {
    return <DrawerButton onPress={() => navigate('DrawerOpen')} />;
  }

  return null;
};

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: ({ navigation }) => ({
      title: 'Restaurants',
      headerLeft: <LeftDrawerButton {...navigation} />
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Menu Items",
    }),
  },
    MenuDetails: {
        screen: MenuDetails,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Menu Item',
        })
    }
});


export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: ({ navigation }) => ({
      title: 'Allergies',
      headerLeft: <LeftDrawerButton {...navigation} />,
    }),
  },
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Restaurants',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Allergies',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />,
    },
  },
});

export const Drawer = DrawerNavigator({
  Contact: {
    screen: ContactsStack,
    navigationOptions: {
      drawerLabel: 'Contacts',
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      drawerLabel: 'Me',
    },
  }
});

