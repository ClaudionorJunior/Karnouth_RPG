/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '~/@types';
import { selectItemById } from '~/helpers';
import { SellerManagerItemsState } from './@types';

const initialState: SellerManagerItemsState = {
  sellingItems: [],
  sellerManagerItemsError: '',
  lastSee: 0,
};

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
      state.sellingItems = state.sellingItems.filter(
        it => it.id !== action.payload.id,
      );
    },

    changeLastSee: (state, action: PayloadAction<number>) => {
      state.lastSee = action.payload;
    },

    resetSellerItems: state => {
      state.sellingItems = [];
    },

    resetError: state => {
      state.sellerManagerItemsError = '';
    },
  },
});

export const SellerManagerItemsActions = SellerManagerItemsSlice.actions;

export default SellerManagerItemsSlice.reducer;
