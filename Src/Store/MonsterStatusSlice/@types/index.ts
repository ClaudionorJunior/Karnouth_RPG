import { MonsterStatus } from '~/@types';
import { ChangePlayerLifeParams } from '../../PlayerStatusSlice/@types';

export interface MonsterStatusState {
  Monster?: MonsterStatus;
  monsterXPPoints?: number;
  monsterLifePoints?: number;
  currentMonsterLifePoints?: number;
  monsterDead: boolean;
}

export type ChangeMonsterLifeParams = ChangePlayerLifeParams;
