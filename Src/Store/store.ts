import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayerStatusSlice from './PlayerStatusSlice';

const reducers = combineReducers({
  playerState: PlayerStatusSlice,
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
