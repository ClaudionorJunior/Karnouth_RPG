/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BattleHistoryState } from './@types';

const initialState: BattleHistoryState = {
  history: [],
};

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
      state.history = [];
    },
  },
});

export const BattleHistoryActions = BattleHistorySlice.actions;

export default BattleHistorySlice.reducer;
