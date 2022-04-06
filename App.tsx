import React from 'react';
import { Provider } from 'react-redux';
import { Graduate_400Regular, useFonts } from '@expo-google-fonts/graduate';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './Src/Store/store';
import { LoadingScreen } from './Src/Components';
import Root from './Src';

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
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
