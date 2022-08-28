/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const BattleHistorySlice = createSlice({
  name: 'BattleHistoryState',
  initialState,
  reducers: {
    addBattleHistory: (state, action: PayloadAction<string>) => {
      if (!!action.payload) {
        state.history = [...state.history, action.payload];
      }
    },

    resetAllStatus: state => {
      state.history = initialState.history;
    },
  },
});

export const BattleHistoryActions = BattleHistorySlice.actions;

export default BattleHistorySlice.reducer;
