/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangePlayerAttributesProps, PlayerTypies } from '~/@types';
import {
  ChangePlayerLifeParams,
  ChangePlayerStatusParams,
  OnChangePlayerLevelParams,
} from './@types';
import { addOrTakeOffPlayerStatusBuilder } from './thunks/addOrTakeOffPlayerStatusAsync';
import { initialState } from './initialState';

export const PlayerStatusSlice = createSlice({
  name: 'PlayerState',
  initialState,
  reducers: {
    changePlayerClass: (state, action: PayloadAction<PlayerTypies>) => {
      state.playerType = action.payload;
    },

    changePlayerAttributes: (
      state,
      action: PayloadAction<ChangePlayerAttributesProps>,
    ) => {
      const tempClass = state.playerType;
      if (tempClass) {
        if (action.payload.type === 'add') {
          state[tempClass].defense += action.payload.defense;
          state[tempClass].intelligence += action.payload.intelligence;
          state[tempClass].life += action.payload.life;
          state[tempClass].power += action.payload.power;
          state[tempClass].precision += action.payload.precision;
        } else {
          state[tempClass].defense -= action.payload.defense;
          state[tempClass].intelligence -= action.payload.intelligence;
          state[tempClass].life -= action.payload.life;
          state[tempClass].power -= action.payload.power;
          state[tempClass].precision -= action.payload.precision;
        }
      }
    },

    addPlayerExp: (state, action: PayloadAction<number>) => {
      state.playerXPPoints += action.payload;
    },

    changeCurrentLife: (
      state,
      action: PayloadAction<ChangePlayerLifeParams>,
    ) => {
      switch (action.payload.typeToChange) {
        case 'add':
          if (
            state.currentPlayerLifePoints + action.payload.amount >
            state.playerLifePoints
          ) {
            state.currentPlayerLifePoints = state.playerLifePoints;
          } else {
            state.currentPlayerLifePoints += action.payload.amount;
          }
          break;
        default:
          if (state.currentPlayerLifePoints - action.payload.amount <= 0) {
            state.currentPlayerLifePoints = 0;
          } else {
            state.currentPlayerLifePoints -= action.payload.amount;
          }
          break;
      }
    },

    clearRemainingPoints: state => {
      state.remainingPoints = 0;
    },

    resetRemainingPoints: (
      state,
      action: PayloadAction<{ points?: number }>,
    ) => {
      if (action.payload?.points) {
        state.remainingPoints += action.payload.points;
      } else {
        state.remainingPoints = 10;
      }
    },

    onChangePlayerLevel: (
      state,
      action: PayloadAction<OnChangePlayerLevelParams>,
    ) => {
      state.level = action.payload.level;
      state.remainingPoints += 1;
      state.xpToNextLevel = action.payload.xpToNextLevel;
    },

    resetAllStatus: state => {
      state.Mage = initialState.Mage;
      state.Warrior = initialState.Warrior;
      state.Ranger = initialState.Ranger;
      state.playerType = initialState.playerType;
      state.remainingPoints = initialState.remainingPoints;
      state.playerXPPoints = initialState.playerXPPoints;
      state.playerLifePoints = initialState.playerLifePoints;
      state.currentPlayerLifePoints = initialState.currentPlayerLifePoints;
      state.xpToNextLevel = initialState.xpToNextLevel;
      state.level = initialState.level;
      state.isLoading = false;
    },

    resetPartialStatus: state => {
      state.Mage = initialState.Mage;
      state.Warrior = initialState.Warrior;
      state.Ranger = initialState.Ranger;

      state.playerLifePoints = initialState.playerLifePoints;
      state.currentPlayerLifePoints = initialState.currentPlayerLifePoints;
    },
  },
  extraReducers: builder => {
    addOrTakeOffPlayerStatusBuilder(builder);
  },
});

export const PlayerStatusActions = PlayerStatusSlice.actions;
export type { ChangePlayerStatusParams, OnChangePlayerLevelParams };

export default PlayerStatusSlice.reducer;
