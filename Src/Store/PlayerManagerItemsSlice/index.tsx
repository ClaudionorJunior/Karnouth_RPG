/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../@types';
import { MAX_INVENTORY } from '../../Global';
import { PlayerManagerItemsState } from './@types';

const initialState: PlayerManagerItemsState = {
  bodyItems: [],
  inventoryItems: [],
  playerManagerItemsError: undefined,
};

export const PlayerManagerItemsSlice = createSlice({
  name: 'PlayerManagerItemsState',
  initialState,
  reducers: {
    addPlayerBodyItem: (state, action: PayloadAction<Item>) => {
      state.bodyItems = [...state.bodyItems, action.payload];
    },

    addPlayerInventoryItem: (
      state,
      action: PayloadAction<Item | undefined>,
    ) => {
      if (action.payload) {
        if (state.inventoryItems.length < MAX_INVENTORY) {
          state.inventoryItems = [...state.inventoryItems, action.payload];
        } else {
          state.playerManagerItemsError =
            "you don't have more slots in your inventory";
        }
      } else {
        state.playerManagerItemsError = "this item don't exists";
      }
    },

    resetAllItems: state => {
      state.bodyItems = [];
      state.inventoryItems = [];
    },

    resetError: state => {
      state.playerManagerItemsError = undefined;
    },
  },
});

export const PlayerManagerItemsActions = PlayerManagerItemsSlice.actions;

export default PlayerManagerItemsSlice.reducer;
