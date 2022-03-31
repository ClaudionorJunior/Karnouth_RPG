import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch, useSelector } from 'react-redux/';
import store from './Src/Store/store';
import { RootState } from './Src/Store/state';
import { CounterActions } from './Src/Store/CounterSlice';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ASD />
      </NavigationContainer>
    </Provider>
  );
}

export function ASD() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={{ backgroundColor: 'red', height: 50, width: 50 }}
        onPress={() => dispatch(CounterActions.increment())}
      >
        <Text>MAIS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'red', height: 50, width: 50 }}
        onPress={() => dispatch(CounterActions.decrement())}
      >
        <Text>MENOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
