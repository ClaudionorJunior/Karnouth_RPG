import { NavigationContainer } from '@react-navigation/native';
import { Graduate_400Regular, useFonts } from '@expo-google-fonts/graduate';
import { StatusBar } from 'expo-status-bar';
import { LoadingScreen } from './components/LoadingScreen';
import ContextProvider from './hooks/ContextProvider';
import MainStack from './routes';

const Root = () => {
  const [fontsLoaded] = useFonts({
    Graduate_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <ContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ContextProvider>
    </>
  );
};

export default Root;
