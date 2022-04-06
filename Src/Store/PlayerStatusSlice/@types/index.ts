import { PlayerStatus, PlayerTypies, StatusTypies } from '../../../@types';

export interface PlayerStatusState {
  Mage: PlayerStatus;
  Warrior: PlayerStatus;
  Ranger: PlayerStatus;
  playerType?: PlayerTypies;
  remainingPoints: number;
  playerXPPoints: number;
  playerLifePoints: number;
  currentPlayerLifePoints: number;
}

export interface ChangePlayerLifeParams {
  amount: number;
  typeToChange: 'take off' | 'add';
}

export interface ChangePlayerStatusParams {
  statusType: StatusTypies;
  typeToChange: 'take off' | 'add';
}
