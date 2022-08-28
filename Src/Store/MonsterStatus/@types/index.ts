import { MonsterStatus } from '~/@types';
import { ChangePlayerLifeParams } from '../../PlayerStatus/@types';

export interface MonsterStatusState {
  Monster?: MonsterStatus;
  monsterXPPoints?: number;
  monsterLifePoints?: number;
  currentMonsterLifePoints?: number;
  monsterDead: boolean;
}

export type ChangeMonsterLifeParams = ChangePlayerLifeParams;
