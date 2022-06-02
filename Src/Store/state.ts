import { PlayerManagerItemsState } from './PlayerManagerItemsSlice/@types';
import { PlayerStatusState } from './PlayerStatusSlice/@types';

export interface RootState {
  playerState: PlayerStatusState;
  PlayerManagerItemsState: PlayerManagerItemsState;
}
