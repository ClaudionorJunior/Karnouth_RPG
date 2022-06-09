/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../@types';
import { LootManagerState, ItemHashedId } from './@types';

const initialState: LootManagerState = {
  loot: [],
};

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
      state.loot = [];
    },
  },
});

export const LootManagerActions = LootManagerSlice.actions;

export default LootManagerSlice.reducer;
