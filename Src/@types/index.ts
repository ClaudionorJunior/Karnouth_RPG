import { palletColors } from '../Styles';

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

export type Colors = typeof palletColors;

export type { Item, ItemsType } from './item';

/**
 * LocalPressed is to indicate where do you press to see itens.
 * @param inventory - you pressed at inventory.
 * @param body - you pressed at your equiped items.
 * @param hunt - you pressed at loot of your hunt.
 */
export type LocalPressed = 'inventory' | 'body' | 'hunt';
