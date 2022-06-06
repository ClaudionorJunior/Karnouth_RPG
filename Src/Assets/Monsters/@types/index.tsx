/* eslint-disable import/no-mutable-exports */
import { MonsterStatus } from '../../../@types';
import troll from '../troll.bmp';
import orc from '../orc.bmp';

export const AllMonsters: MonsterStatus[] = [
  {
    name: 'troll',
    power: 5,
    defense: 5,
    source: troll,
    life: 200,
    xp: 100,
    lote: [
      {
        itemId: 1004,
        rarityChance: 1000,
      },
    ],
  },
  {
    name: 'orc',
    power: 5,
    defense: 5,
    source: orc,
    life: 200,
    xp: 100,
    lote: [
      {
        itemId: 1001,
        rarityChance: 1000,
      },
    ],
  },
];
