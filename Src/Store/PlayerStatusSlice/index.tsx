/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerTypies, StatusTypies } from '../../@types';
import {
  ChangePlayerLifeParams,
  ChangePlayerStatusParams,
  OnChangePlayerLevelParams,
  PlayerStatusState,
} from './@types';

const initialState: PlayerStatusState = {
  playerType: undefined,
  Mage: {
    intelligence: 15,
    life: 5,
    power: 0,
    presicion: 5,
    defence: 5,
  },
  Warrior: {
    intelligence: 0,
    life: 9,
    power: 9,
    presicion: 5,
    defence: 7,
  },
  Ranger: {
    intelligence: 0,
    life: 5,
    power: 5,
    presicion: 15,
    defence: 5,
  },
  remainingPoints: 10,
  playerXPPoints: 0,
  xpToNextLevel: 150,
  level: 1,
  playerLifePoints: 150,
  currentPlayerLifePoints: 150,
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

        const takeOff = (type: StatusTypies) => {
          state[state.playerType!][type] -= 1;
          if (state.remainingPoints < 10) {
            state.remainingPoints += 1;
            switch (state.playerType!) {
              case 'Mage':
                state.playerLifePoints -= 5;
                break;
              case 'Warrior':
                state.playerLifePoints -= 15;
                break;
              case 'Ranger':
                state.playerLifePoints -= 10;
                break;
            }
          }
        };

        switch (action.payload.statusType) {
          case 'intelligence':
            if (action.payload.typeToChange === 'add') {
              add(action.payload.statusType);
            } else {
              takeOff(action.payload.statusType);
            }
            break;
          case 'life':
            if (action.payload.typeToChange === 'add') {
              add(action.payload.statusType);
            } else {
              takeOff(action.payload.statusType);
            }
            break;
          case 'power':
            if (action.payload.typeToChange === 'add') {
              add(action.payload.statusType);
            } else {
              takeOff(action.payload.statusType);
            }
            break;
          case 'presicion':
            if (action.payload.typeToChange === 'add') {
              add(action.payload.statusType);
            } else {
              takeOff(action.payload.statusType);
            }
            break;
          case 'defence':
            if (action.payload.typeToChange === 'add') {
              add(action.payload.statusType);
            } else {
              takeOff(action.payload.statusType);
            }
            break;
        }
      }
    },

    changePlayerClass: (state, action: PayloadAction<PlayerTypies>) => {
      state.playerType = action.payload;
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

    resetRemainingPoints: state => {
      state.remainingPoints = 10;
    },

    onChangePlayerLevel: (
      state,
      action: PayloadAction<OnChangePlayerLevelParams>,
    ) => {
      state.level = action.payload.level;
      state.xpToNextLevel = action.payload.xpToNextLevel;
    },

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
