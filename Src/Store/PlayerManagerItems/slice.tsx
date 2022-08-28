/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '~/@types';
import { MAX_INVENTORY } from '~/global';
import { removeOneItemLogic, selectItemById } from '~/helpers';
import { initialState } from './initialState';

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

    removeOneItem: (
      state,
      action: PayloadAction<{ id: string | number[] | undefined }>,
    ) => {
      state.inventoryItems = removeOneItemLogic(
        state.inventoryItems,
        action.payload?.id || '',
      );
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
        state.unquipePlayerBodyItemSuccess = true;
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

    addGoldItemOnBody: state => {
      state.bodyItems = [...state.bodyItems, selectItemById(9999)];
    },

    addGoldCoin: (state, action: PayloadAction<number>) => {
      state.bodyItems = state.bodyItems.filter(it => {
        if (it.itemId === 9999) {
          if (!it.amount) {
            it.amount = 0;
            it.amount = action.payload;
          } else {
            it.amount += action.payload;
          }
        }
        return it;
      });
    },

    removeGoldCoin: (state, action: PayloadAction<number>) => {
      state.bodyItems = state.bodyItems.filter(it => {
        if (it.itemId === 9999) {
          if (it.amount) {
            if (it.amount > action.payload) {
              it.amount -= action.payload;
            } else {
              state.playerManagerItemsError = "you don't have money";
            }
          } else {
            state.playerManagerItemsError = "you don't have money";
          }
        }
        return it;
      });
    },

    resetAllItems: state => {
      state.bodyItems = initialState.bodyItems;
      state.inventoryItems = initialState.inventoryItems;
    },

    setMessageError: (state, action: PayloadAction<string>) => {
      state.playerManagerItemsError = action.payload;
    },

    resetError: state => {
      state.playerManagerItemsError = '';
    },

    resetAddPlayerBodyItemSuccess: state => {
      state.addPlayerBodyItemSuccess = undefined;
    },

    resetUnquipePlayerBodyItemSuccess: state => {
      state.unquipePlayerBodyItemSuccess = undefined;
    },
  },
});

export const PlayerManagerItemsActions = PlayerManagerItemsSlice.actions;

export default PlayerManagerItemsSlice.reducer;
