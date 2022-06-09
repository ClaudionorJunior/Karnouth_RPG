import { PlayerTypies } from '.';

export type ItemsType =
  | 'weapon'
  | 'wand'
  | 'distance'
  | 'shield'
  | 'helmet'
  | 'armor'
  | 'legs'
  | 'boots'
  | 'potion'
  | 'gold';

export interface SourceFile {
  source?: any;
}

export type ItemListType =
  | 'demon_legs'
  | 'golden_boots'
  | 'plate_armor'
  | 'plate_helmet'
  | 'rapier_sword'
  | 'steel_sword'
  | 'wooden_shield'
  | 'wooden_wand'
  | 'crossbow'
  | 'light_wand'
  | 'gold';

export interface Item extends SourceFile {
  id: string | number[];
  itemId?: number;
  itemName?: ItemListType;
  itemUIName?: string;
  itemType?: ItemsType;
  description?: string;
  power?: number;
  defense?: number;
  precision?: number;
  intelligence?: number;
  restoreLife?: number;
  usedBy?: PlayerTypies;
  amount?: number;
  buyFor?: number;
  sellFor?: number;
}
