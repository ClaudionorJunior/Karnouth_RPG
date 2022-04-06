/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerTypies, StatusTypies } from '../../@types';
import { ChangePlayerStatusParams, PlayerStatusState } from './@types';

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
          }
        };

        const takeOff = (type: StatusTypies) => {
          state[state.playerType!][type] -= 1;
          if (state.remainingPoints < 10) {
            state.remainingPoints += 1;
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

    clearRemainingPoints: state => {
      state.remainingPoints = 0;
    },

    resetRemainingPoints: state => {
      state.remainingPoints = 10;
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
    },
  },
});

export const PlayerStatusActions = PlayerStatusSlice.actions;
export type { ChangePlayerStatusParams };

export default PlayerStatusSlice.reducer;
