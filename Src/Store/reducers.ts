import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayerManagerItemsSlice from './PlayerManagerItemsSlice';
import PlayerStatusSlice from './PlayerStatusSlice';

const reducers = combineReducers({
  playerState: PlayerStatusSlice,
  PlayerManagerItemsState: PlayerManagerItemsSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

export const persistedReducer = persistReducer(persistConfig, reducers);