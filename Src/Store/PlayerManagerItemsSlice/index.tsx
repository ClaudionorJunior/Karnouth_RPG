/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../@types';
import { MAX_INVENTORY } from '../../Global';
import { PlayerManagerItemsState } from './@types';

const initialState: PlayerManagerItemsState = {
  bodyItems: [],
  inventoryItems: [],
  playerManagerItemsError: undefined,
  addPlayerBodyItemSuccess: undefined,
};

export const PlayerManagerItemsSlice = createSlice({
  name: 'PlayerManagerItemsState',
  initialState,
  reducers: {
    addPlayerBodyItem: (state, action: PayloadAction<Item>) => {
      const thisFieldFilled = state.bodyItems.filter(
        it => it.itemType === action.payload.itemType,
      )[0];

      if (!thisFieldFilled) {
        state.bodyItems = [...state.bodyItems, action.payload];
        state.inventoryItems = state.inventoryItems.filter(
          it => it.id !== action.payload.id,
        );
        state.addPlayerBodyItemSuccess = true;
      } else {
        state.playerManagerItemsError = `you are already using an item ${action.payload.itemType}`;
      }
    },

    unquipePlayerBodyItem: (state, action: PayloadAction<Item>) => {
      if (state.inventoryItems.length < MAX_INVENTORY) {
        const toRemoveAtBody = state.bodyItems.filter(
          it => it.itemType === action.payload.itemType,
        )[0];
        state.bodyItems = state.bodyItems.filter(
          it => it.id !== action.payload.id,
        );
        state.inventoryItems = [...state.inventoryItems, toRemoveAtBody];
      } else {
        state.playerManagerItemsError =
          "you don't have more slots in your inventory";
      }
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

    setMessageError: (state, action: PayloadAction<string>) => {
      state.playerManagerItemsError = action.payload;
    },

    resetError: state => {
      state.playerManagerItemsError = undefined;
    },

    resetAddPlayerBodyItemSuccess: state => {
      state.addPlayerBodyItemSuccess = undefined;
    },
  },
});

export const PlayerManagerItemsActions = PlayerManagerItemsSlice.actions;

export default PlayerManagerItemsSlice.reducer;
