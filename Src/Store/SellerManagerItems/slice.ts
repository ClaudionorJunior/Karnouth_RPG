/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '~/@types';
import { removeOneItemLogic, selectItemById } from '~/helpers';
import { initialState } from './initialState';

export const SellerManagerItemsSlice = createSlice({
  name: 'SellerManagerItemsState',
  initialState,
  reducers: {
    addSellerItem: (state, action: PayloadAction<number[]>) => {
      if (action.payload.length <= 5) {
        if (!state.sellingItems.length) {
          action.payload.forEach(n => {
            if (n !== 9999 && n >= 1000 && n < 9998) {
              let tempItem: Item = selectItemById(n);
              state.sellingItems = [...state.sellingItems, tempItem];
            }
          });
        }
      } else {
        state.sellerManagerItemsError = `you don't have more slots to sell`;
      }
    },

    removeOneItem: (
      state,
      action: PayloadAction<{ id: string | number[] | undefined }>,
    ) => {
      state.sellingItems = removeOneItemLogic(
        state.sellingItems,
        action.payload?.id || '',
      );
    },

    changeLastSee: (state, action: PayloadAction<number>) => {
      state.lastSee = action.payload;
    },

    resetSellerItems: state => {
      state.sellingItems = initialState.sellingItems;
    },

    resetError: state => {
      state.sellerManagerItemsError = '';
    },
  },
});

export const SellerManagerItemsActions = SellerManagerItemsSlice.actions;

export default SellerManagerItemsSlice.reducer;
