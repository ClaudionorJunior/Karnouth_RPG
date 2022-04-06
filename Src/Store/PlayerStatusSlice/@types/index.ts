import { PlayerStatus, PlayerTypies, StatusTypies } from '../../../@types';

export interface PlayerStatusState {
  Mage: PlayerStatus;
  Warrior: PlayerStatus;
  Ranger: PlayerStatus;
  playerType?: PlayerTypies;
  remainingPoints: number;
}

export interface ChangePlayerStatusParams {
  statusType: StatusTypies;
  typeToChange: 'take off' | 'add';
}
