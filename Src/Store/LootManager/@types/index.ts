import { Item } from '~/@types';

export interface LootManagerState {
  loot: Item[];
}

export interface ItemHashedId {
  id: number[] | string;
}
