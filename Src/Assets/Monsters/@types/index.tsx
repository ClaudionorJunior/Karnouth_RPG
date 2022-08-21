/* eslint-disable import/no-mutable-exports */
import { MonsterStatus } from '~/@types';
import troll from '../troll.bmp';
import orc from '../orc.bmp';
import { selectItemById } from '~/helpers';

export let AllMonsters: MonsterStatus[] = [
  {
    name: 'troll',
    power: 5,
    defense: 5,
    source: troll,
    life: 200,
    xp: 100,
    rangeGold: [2, 20],
    lote: [
      {
        ...selectItemById(1004),
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
    rangeGold: [20, 200],
    lote: [
      {
        ...selectItemById(1001),
      },
    ],
  },
];
