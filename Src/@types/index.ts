import { palletColors } from '~/styles';
import { Item } from './item';

export type PlayerTypies = 'Warrior' | 'Ranger' | 'Mage';

export type StatusTypies =
  | 'intelligence'
  | 'life'
  | 'power'
  | 'precision'
  | 'defense';

export interface PlayerStatus {
  life: number;
  power: number;
  precision: number;
  intelligence: number;
  defense: number;
}

export interface MonsterLoot {
  itemId: number;
}

export interface MonsterStatus {
  name: string;
  life: number;
  xp: number;
  power: number;
  defense: number;
  source: any;
  rangeGold?: number[];
  lote: Item[];
}

export interface ChangePlayerAttributesProps extends PlayerStatus {
  type: 'takeoff' | 'add';
}

export type Colors = typeof palletColors;

export type { Item, ItemsType } from './item';

/**
 * LocalPressed is to indicate where do you press to see itens.
 * @param inventory - you pressed at inventory.
 * @param body - you pressed at your equiped items.
 * @param hunt - you pressed at loot of your hunt.
 */
export type LocalPressed =
  | 'inventory'
  | 'body'
  | 'hunt'
  | 'mallInventory'
  | 'sellerInventory'
  | 'rewards';
