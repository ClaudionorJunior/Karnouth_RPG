import React from 'react';
import { Provider } from 'react-redux';
import { Graduate_400Regular, useFonts } from '@expo-google-fonts/graduate';
import store from './Src/Store/store';
import { LoadingScreen } from './Src/Components';
import Root from './Src';

const App = () => {
  const [fontsLoaded] = useFonts({
    Graduate_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
