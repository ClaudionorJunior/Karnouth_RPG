/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerTypies, StatusTypies } from '../../@types';
import {
  PlayerUsingItemsState,
} from './@types';

const initialState: PlayerUsingItemsState = {
  bodyItems: [{
    name: '',
    description: undefined,
    defense: 0,
    intelligence: 0,
    itemType: 'armor',
    power: 0,
    precision: 0,
    restoreLife: 0,
    
  }],
  handItems: [{
    name: '',
    description: undefined,
    defense: 0,
    intelligence: 0,
    itemType: 'armor',
    power: 0,
    precision: 0,
    restoreLife: 0,
    
  }]
};

export const PlayerStatusSlice = createSlice({
  name: 'playerState',
  initialState,
  reducers: {
    changePlayerStatus: (
      state,
      action: PayloadAction<ChangePlayerStatusParams>,
    ) => {
      if (state.playerType) {
        const add = (type: StatusTypies) => {
          state[state.playerType!][type] += 1;
          if (state.remainingPoints >= 1) {
            state.remainingPoints -= 1;
            switch (state.playerType!) {
              case 'Mage':
                state.playerLifePoints += 5;
                break;
              case 'Warrior':
                state.playerLifePoints += 15;
                break;
              case 'Ranger':
                state.playerLifePoints += 10;
                break;
            }
          }
        };

    resetAllStatus: state => {
      state.Mage = {
        intelligence: 15,
        life: 5,
        power: 0,
        presicion: 5,
        defence: 5,
      };
      state.Warrior = {
        intelligence: 0,
        life: 9,
        power: 9,
        presicion: 5,
        defence: 7,
      };
      state.Ranger = {
        intelligence: 0,
        life: 5,
        power: 5,
        presicion: 15,
        defence: 5,
      };
      state.playerType = undefined;
      state.remainingPoints = 10;
      state.playerXPPoints = 0;
      state.playerLifePoints = 150;
      state.currentPlayerLifePoints = 150;
      state.xpToNextLevel = 150;
      state.level = 1;
    },
  },
});

export const PlayerStatusActions = PlayerStatusSlice.actions;
export type { ChangePlayerStatusParams, OnChangePlayerLevelParams };

export default PlayerStatusSlice.reducer;
