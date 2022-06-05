import { PlayerManagerItemsState } from './PlayerManagerItemsSlice/@types';
import { PlayerStatusState } from './PlayerStatusSlice/@types';
import { SellerManagerItemsState } from './SellerManagerItemsSlice/@types';

export interface RootState {
  playerState: PlayerStatusState;
  PlayerManagerItemsState: PlayerManagerItemsState;
  SellerManagerItemsState: SellerManagerItemsState;
}
