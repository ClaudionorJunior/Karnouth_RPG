/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Main from '../Screens/Main';
import CreatePlayer from '../Screens/CreatePlayer';
import Home from '../Screens/Home';
import { useLevelManager } from '../Hooks';
import { RootState } from '../Store/state';
import { normalizePixel } from '../Helpers';
import Mall from '../Screens/Mall';
import Battle from '../Screens/Battle';
import { ModalItemDetailProvider } from '../Screens/Battle/Hooks/useModalSelectMonster';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  useLevelManager();
  const { colors } = useTheme();

  const headerOptionsManager = useCallback(
    (title: string): NativeStackNavigationOptions => {
      return {
        title,
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.primary1 },
        headerBackVisible: !playerState.playerType,
      };
    },
    [playerState.playerType],
  );

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePlayer"
        component={CreatePlayer}
        options={headerOptionsManager('Create Player')}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BattleScreenWrapper = () => (
  <ModalItemDetailProvider>
    <Battle />
  </ModalItemDetailProvider>
);

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: 'castle' | 'store' | 'axe';
          if (route.name === 'Home') {
            iconName = 'castle';
          } else if (route.name === 'Mall') {
            iconName = 'store';
          } else {
            iconName = 'axe';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={normalizePixel(size)}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: colors.primary1,
        tabBarInactiveTintColor: colors.neutral,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Mall"
        component={Mall}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Battle"
        component={BattleScreenWrapper}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
