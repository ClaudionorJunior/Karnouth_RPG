import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayerManagerItemsSlice from './PlayerManagerItems/slice';
import PlayerStatusSlice from './PlayerStatus/slice';
import SellerManagerItemsSlice from './SellerManagerItems/slice';
import MonsterStatusSlice from './MonsterStatus/slice';
import BattleHistorySlice from './BattleHistory/slice';
import LootManagerSlice from './LootManager/slice';

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
