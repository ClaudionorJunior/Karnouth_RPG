import { palletColors } from '../Styles';

export type PlayerTypies = 'Warrior' | 'Ranger' | 'Mage';

export interface PlayerStatus {
  life: number;
  power: number;
  presicion: number;
  intelligence: number;
  defence: number;
}

export type Colors = typeof palletColors;
