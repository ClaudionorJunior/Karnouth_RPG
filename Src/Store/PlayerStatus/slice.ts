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
      if (action.payload.typeToChange === 'add') {
        if (
          state.currentPlayerLifePoints + action.payload.amount >
          state.playerLifePoints
        ) {
          state.currentPlayerLifePoints = state.playerLifePoints;
        } else {
          state.currentPlayerLifePoints += action.payload.amount;
        }
      } else {
        state.currentPlayerLifePoints -= action.payload.amount;
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
      state.Mage = {
        intelligence: 15,
        life: 5,
        power: 0,
        precision: 5,
        defense: 5,
      };
      state.Warrior = {
        intelligence: 0,
        life: 9,
        power: 9,
        precision: 5,
        defense: 7,
      };
      state.Ranger = {
        intelligence: 0,
        life: 5,
        power: 5,
        precision: 15,
        defense: 5,
      };
      state.playerType = undefined;
      state.remainingPoints = 10;
      state.playerXPPoints = 0;
      state.playerLifePoints = 150;
      state.currentPlayerLifePoints = 150;
      state.xpToNextLevel = 150;
      state.level = 1;
    },

    resetPartialStatus: state => {
      state.Mage = {
        intelligence: 15,
        life: 5,
        power: 0,
        precision: 5,
        defense: 5,
      };
      state.Warrior = {
        intelligence: 0,
        life: 9,
        power: 9,
        precision: 5,
        defense: 7,
      };
      state.Ranger = {
        intelligence: 0,
        life: 5,
        power: 5,
        precision: 15,
        defense: 5,
      };

      state.playerLifePoints = 150;
      state.currentPlayerLifePoints = 150;
    },
  },
  extraReducers: builder => {
    addOrTakeOffPlayerStatusBuilder(builder);
  },
});

export const PlayerStatusActions = PlayerStatusSlice.actions;
export type { ChangePlayerStatusParams, OnChangePlayerLevelParams };

export default PlayerStatusSlice.reducer;
