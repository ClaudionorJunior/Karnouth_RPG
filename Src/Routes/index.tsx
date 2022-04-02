import React, { useCallback } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import Main from '../Screens/Main';
import CreatePlayer from '../Screens/CreatePlayer';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { colors } = useTheme();

  const headerOptionsManager = useCallback(
    (title: string): NativeStackNavigationOptions => {
      return {
        title,
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.primary },
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
    </Stack.Navigator>
  );
};

export default MainStack;
