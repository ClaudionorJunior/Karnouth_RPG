import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayerManagerItemsSlice from './PlayerManagerItemsSlice';
import PlayerStatusSlice from './PlayerStatus/slice';
import SellerManagerItemsSlice from './SellerManagerItemsSlice';
import MonsterStatusSlice from './MonsterStatusSlice';
import BattleHistorySlice from './BattleHistorySlice';
import LootManagerSlice from './LootManagerSlice';

const reducers = combineReducers({
  PlayerState: PlayerStatusSlice,
  PlayerManagerItemsState: PlayerManagerItemsSlice,
  SellerManagerItemsState: SellerManagerItemsSlice,
  MonsterState: MonsterStatusSlice,
  BattleHistoryState: BattleHistorySlice,
  LootManagerState: LootManagerSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

export const persistedReducer = persistReducer(persistConfig, reducers);
