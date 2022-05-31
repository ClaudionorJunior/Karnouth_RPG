import { palletColors } from '../Styles';

export type PlayerTypies = 'Warrior' | 'Ranger' | 'Mage';

export type StatusTypies =
  | 'intelligence'
  | 'life'
  | 'power'
  | 'presicion'
  | 'defence';

export interface PlayerStatus {
  life: number;
  power: number;
  presicion: number;
  intelligence: number;
  defence: number;
}

export type Colors = typeof palletColors;

export type { Item, ItemsType } from './item';
