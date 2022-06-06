import { PlayerManagerItemsState } from './PlayerManagerItemsSlice/@types';
import { PlayerStatusState } from './PlayerStatusSlice/@types';
import { SellerManagerItemsState } from './SellerManagerItemsSlice/@types';
import { MonsterStatusState } from './MonsterStatusSlice/@types';
import { BattleHistoryState } from './BattleHistorySlice/@types';

export interface RootState {
  playerState: PlayerStatusState;
  PlayerManagerItemsState: PlayerManagerItemsState;
  SellerManagerItemsState: SellerManagerItemsState;
  MonsterState: MonsterStatusState;
  BattleHistoryState: BattleHistoryState;
}
