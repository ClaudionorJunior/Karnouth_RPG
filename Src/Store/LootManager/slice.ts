/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '~/@types';
import { ItemHashedId } from './@types';
import { initialState } from './initialState';

export const LootManagerSlice = createSlice({
  name: 'LootManagerState',
  initialState,
  reducers: {
    addItemsToLoot: (state, action: PayloadAction<Item[]>) => {
      state.loot = action.payload;
    },

    removeOneItem: (state, action: PayloadAction<ItemHashedId>) => {
      state.loot = state.loot?.filter(it => it.id !== action.payload.id);
    },

    resetAllStatus: state => {
      state.loot = initialState.loot;
    },
  },
});

export const LootManagerActions = LootManagerSlice.actions;

export default LootManagerSlice.reducer;
