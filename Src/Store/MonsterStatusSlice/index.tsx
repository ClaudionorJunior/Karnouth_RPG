/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MonsterStatus } from '../../@types';
import { ChangeMonsterLifeParams, MonsterStatusState } from './@types';

const initialState: MonsterStatusState = {
  Monster: undefined,
  currentMonsterLifePoints: undefined,
  monsterLifePoints: undefined,
  monsterXPPoints: undefined,
  monsterDead: false,
};

export const MonsterStatusSlice = createSlice({
  name: 'MonsterState',
  initialState,
  reducers: {
    addMonter: (state, action: PayloadAction<MonsterStatus>) => {
      state.Monster = action.payload;
      state.currentMonsterLifePoints = action.payload.life;
      state.monsterLifePoints = action.payload.life;
      state.monsterXPPoints = action.payload.xp;
      state.monsterDead = false;
    },

    changeCurrentLife: (
      state,
      action: PayloadAction<ChangeMonsterLifeParams>,
    ) => {
      if (state.currentMonsterLifePoints && state.monsterLifePoints) {
        if (action.payload.typeToChange === 'add') {
          if (
            state.currentMonsterLifePoints + action.payload.amount >
            state.monsterLifePoints
          ) {
            state.currentMonsterLifePoints = state.monsterLifePoints;
          } else {
            state.currentMonsterLifePoints += action.payload.amount;
          }
        } else if (action.payload.amount > state.currentMonsterLifePoints) {
          state.currentMonsterLifePoints = 0;
          state.monsterDead = true;
        } else {
          state.currentMonsterLifePoints -= action.payload.amount;
        }
      }
    },

    resetAllStatus: state => {
      state.Monster = undefined;
      state.currentMonsterLifePoints = undefined;
      state.monsterLifePoints = undefined;
      state.monsterXPPoints = undefined;
      state.monsterDead = false;
    },
  },
});

export const MonsterStatusActions = MonsterStatusSlice.actions;

export default MonsterStatusSlice.reducer;
