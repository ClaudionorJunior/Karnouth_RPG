import React, { useCallback } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import Main from '../Screens/Main';
import CreatePlayer from '../Screens/CreatePlayer';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { colors } = useTheme();

  const headerOptionsManager = useCallback(
    (title: string): NativeStackNavigationOptions => {
      return {
        title,
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.primary1 },
      };
    },
    [],
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
        name="Home"
        component={Home}
        options={headerOptionsManager('Home')}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
