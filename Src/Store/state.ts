import { PlayerManagerItemsState } from './PlayerManagerItemsSlice/@types';
import { PlayerStatusState } from './PlayerStatusSlice/@types';
import { SellerManagerItemsState } from './SellerManagerItemsSlice/@types';
import { MonsterStatusState } from './MonsterStatusSlice/@types';
import { BattleHistoryState } from './BattleHistorySlice/@types';
import { LootManagerState } from './LootManagerSlice/@types';

export interface RootState {
  PlayerState: PlayerStatusState;
  PlayerManagerItemsState: PlayerManagerItemsState;
  SellerManagerItemsState: SellerManagerItemsState;
  MonsterState: MonsterStatusState;
  BattleHistoryState: BattleHistoryState;
  LootManagerState: LootManagerState;
}
