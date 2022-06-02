import { ItemListType } from '../Assets/Items/@types';

export type ItemsType =
  | 'weapon'
  | 'wand'
  | 'distance'
  | 'shield'
  | 'helmet'
  | 'armor'
  | 'legs'
  | 'boots'
  | 'potion';

export interface Item {
  id: string | number[];
  itemName?: ItemListType;
  itemUIName?: string;
  itemType?: ItemsType;
  description?: string;
  power?: number;
  defense?: number;
  precision?: number;
  intelligence?: number;
  restoreLife?: number;
}
