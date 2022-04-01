import { NavigationContainer } from '@react-navigation/native';
import { Graduate_400Regular, useFonts } from '@expo-google-fonts/graduate';
import { LoadingScreen } from './Components';
import ContextProvider from './Hooks/ContextProvider';
import Main from './Screens/Main';

export default function Root() {
  const [fontsLoaded] = useFonts({
    Graduate_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <ContextProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ContextProvider>
  );
}
