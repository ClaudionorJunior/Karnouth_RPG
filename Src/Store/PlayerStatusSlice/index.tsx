/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerStatus, PlayerTypies } from '../../@types';

export interface PlayerStatusState {
  Mage: PlayerStatus;
  Warrior: PlayerStatus;
  Ranger: PlayerStatus;
  playerType?: PlayerTypies;
  remainingPoints: number;
}

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

interface ChangePlayerStatusParams {
  intelligence?: number;
  life?: number;
  power?: number;
  presicion?: number;
  defence?: number;
}

export const PlayerStatusSlice = createSlice({
  name: 'playerState',
  initialState,
  reducers: {
    changePlayerStatus: (
      state,
      action: PayloadAction<ChangePlayerStatusParams>,
    ) => {
      if (state.playerType) {
        state[state.playerType].defence =
          action.payload.defence || state[state.playerType]?.defence;
        state[state.playerType].power =
          action.payload.power || state[state.playerType]?.power;
        state[state.playerType].intelligence =
          action.payload.intelligence || state[state.playerType]?.intelligence;
        state[state.playerType].presicion =
          action.payload.presicion || state[state.playerType]?.presicion;
        state[state.playerType].life =
          action.payload.life || state[state.playerType]?.life;
      }
    },

    changePlayerClass: (state, action: PayloadAction<PlayerTypies>) => {
      state.playerType = action.payload;
    },

    clearRemainingPoints: state => {
      state.remainingPoints = 0;
    },

    takeOffRemainingPoints: state => {
      if (state.remainingPoints > 0) {
        state.remainingPoints -= 1;
      }
    },

    addRemainingPoints: state => {
      if (state.remainingPoints < 10) {
        state.remainingPoints += 1;
      }
    },

    resetRemainingPoints: state => {
      state.remainingPoints = 10;
    },

    getPlayerStatus: state => {
      return state;
    },
  },
});

export const PlayerStatusActions = PlayerStatusSlice.actions;

export default PlayerStatusSlice.reducer;
