import React from 'react';
import { Provider } from 'react-redux';
import { Graduate_400Regular, useFonts } from '@expo-google-fonts/graduate';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import { LoadingScreen } from './src/components/LoadingScreen';
import ContextProvider from '~/hooks/ContextProvider';
import MainStack from '~/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Graduate_400Regular,
  });

  const persistor = persistStore(store);

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContextProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </ContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
