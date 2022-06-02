import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayerStatusSlice from './PlayerStatusSlice';
import PlayerManagerItemsSlice from './PlayerManagerItemsSlice';

const reducers = combineReducers({
  playerState: PlayerStatusSlice,
  PlayerManagerItemsState: PlayerManagerItemsSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
