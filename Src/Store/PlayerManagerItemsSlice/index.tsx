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

      /** @description Add new item at bodyItems and remove at inventory */
      const addBodyRemoveInventory = () => {
        state.bodyItems = [...state.bodyItems, action.payload];
        state.inventoryItems = state.inventoryItems.filter(
          it => it.id !== action.payload.id,
        );
      };

      if (!thisFieldFilled) {
        addBodyRemoveInventory();
      } else {
        // We save the body item if this exists
        const filteredBodyItem = state.bodyItems.filter(
          it => it.itemType === action.payload.itemType,
        )[0];
        // Remove old item at bodyItems
        state.bodyItems = state.bodyItems.filter(
          it => it.itemType !== action.payload.itemType,
        );

        addBodyRemoveInventory();
        // return body item at inventoryItems
        state.inventoryItems = [...state.inventoryItems, filteredBodyItem];
      }
      state.addPlayerBodyItemSuccess = true;
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
