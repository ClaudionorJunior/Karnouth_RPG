/* eslint-disable no-param-reassign */
/* eslint-disable no-promise-executor-return */
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { StatusTypies } from '~/@types';
import { RootState } from '../../state';
import { ChangePlayerStatusParams, PlayerStatusState } from '../@types';

export const addOrTakeOffPlayerStatusAsync = createAsyncThunk(
  'addOrTakeOffPlayerStatusAsync',
  async (payload: ChangePlayerStatusParams, { getState }) => {
    const { PlayerState } = getState() as RootState;

    await new Promise<void>((resolve, rejected) =>
      setTimeout(() => {
        if (PlayerState.playerType) {
          resolve();
        } else {
          rejected();
        }
      }, 250),
    );
  },
);

export const addOrTakeOffPlayerStatusBuilder = (
  builder: ActionReducerMapBuilder<PlayerStatusState>,
) => {
  builder
    .addCase(addOrTakeOffPlayerStatusAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.playerType) {
        const add = (type: StatusTypies) => {
          state[state.playerType!][type] += 1;
          if (state.remainingPoints >= 1) {
            state.remainingPoints -= 1;
            if (type === 'life') {
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
          }
        };

        const takeOff = (type: StatusTypies) => {
          state[state.playerType!][type] -= 1;
          if (state.remainingPoints < 10) {
            state.remainingPoints += 1;
            if (type === 'life') {
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
          }
        };

        switch (action.meta.arg.statusType) {
          case 'intelligence':
            if (action.meta.arg.typeToChange === 'add') {
              add(action.meta.arg.statusType);
            } else {
              takeOff(action.meta.arg.statusType);
            }
            break;
          case 'life':
            if (action.meta.arg.typeToChange === 'add') {
              add(action.meta.arg.statusType);
            } else {
              takeOff(action.meta.arg.statusType);
            }
            break;
          case 'power':
            if (action.meta.arg.typeToChange === 'add') {
              add(action.meta.arg.statusType);
            } else {
              takeOff(action.meta.arg.statusType);
            }
            break;
          case 'precision':
            if (action.meta.arg.typeToChange === 'add') {
              add(action.meta.arg.statusType);
            } else {
              takeOff(action.meta.arg.statusType);
            }
            break;
          case 'defense':
            if (action.meta.arg.typeToChange === 'add') {
              add(action.meta.arg.statusType);
            } else {
              takeOff(action.meta.arg.statusType);
            }
            break;
        }
      }
    })
    .addCase(addOrTakeOffPlayerStatusAsync.pending, state => {
      state.isLoading = true;
    })
    .addCase(addOrTakeOffPlayerStatusAsync.rejected, state => {
      state.isLoading = false;
    });
};
