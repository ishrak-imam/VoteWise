import React from 'react';
import {Icon} from '@ui/library';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
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

const tabNavigatorScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
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
  const renderIcon = React.useCallback(
    (name: string, color: string) => (
      <Icon name={name} size={20} color={color} />
    ),
    [],
  );

  return (
    <BottomTab.Navigator screenOptions={tabNavigatorScreenOptions}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color}) => renderIcon('menu', color),
        }}
        name={routeKeys.homeNavigator}
        component={HomeStackNavigator}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color}) => renderIcon('settings', color),
        }}
        name={routeKeys.menuNavigator}
        component={MenuStackNavigator}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
