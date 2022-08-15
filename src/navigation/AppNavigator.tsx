import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeScreen} from '@ui/screens/HomeScreen';
import {MnemonicScreen} from '@ui/screens/MnemonicScreen';
import {SettingsScreen} from '@ui/screens/SettingsScreen';
import type {
  HomeStackNavigation,
  MenuStackNavigation,
  BottomTabNavigation,
} from '@navigation/types';
import * as routeKeys from '@navigation/routeKeys';

const stackNavigatorScreenOptions: NativeStackNavigationOptions = {
  presentation: 'card',
  animation: 'slide_from_right',
};

const HomeStack = createNativeStackNavigator<HomeStackNavigation>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <HomeStack.Screen name={routeKeys.homeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={routeKeys.mnemonicScreen}
        component={MnemonicScreen}
      />
    </HomeStack.Navigator>
  );
}

const MenuStack = createNativeStackNavigator<MenuStackNavigation>();

function MenuStackNavigator() {
  return (
    <MenuStack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <MenuStack.Screen
        name={routeKeys.settingScreen}
        component={SettingsScreen}
      />
    </MenuStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabNavigation>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name={routeKeys.homeNavigator}
        component={HomeStackNavigator}
      />
      <BottomTab.Screen
        name={routeKeys.menuNavigator}
        component={MenuStackNavigator}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
