export type ItemsType =
  | 'weapon'
  | 'wand'
  | 'distance'
  | 'shield'
  | 'helmet'
  | 'armor'
  | 'legs'
  | 'boots';

export interface Item {
  name: string;
  itemType: ItemsType;
  description?: string;
  power: number;
  defense: number;
  precision: number;
  intelligence: number;
  restoreLife: number;
}
