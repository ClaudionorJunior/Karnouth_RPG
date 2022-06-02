import uuid from 'react-native-uuid';
import { Item } from '../../../@types';
import crossbow from '../crossbow.png';
import demon_legs from '../demon_legs.png';
import golden_boots from '../golden_boots.png';
import plate_armor from '../plate_armor.png';
import plate_helmet from '../plate_helmet.png';
import rapier_sword from '../rapier_sword.png';
import steel_sword from '../steel_sword.png';
import wooden_shield from '../wooden_shield.png';
import wooden_wand from '../wooden_wand.png';

export const AllItems: Item[] = [
  {
    id: uuid.v4(),
    itemId: 1000,
    itemName: 'demon_legs',
    itemUIName: 'Demon Legs',
    itemType: 'legs',
    description: 'a powerfull legs of the hell',
    power: 5,
    defense: 5,
    precision: 5,
    intelligence: 0,
    restoreLife: 0,
    source: demon_legs,
  },
  {
    id: uuid.v4(),
    itemId: 1001,
    itemName: 'golden_boots',
    itemUIName: 'Golden Boots',
    itemType: 'boots',
    description: 'a powerfull boots of the dwarfs',
    power: 0,
    defense: 5,
    precision: 5,
    intelligence: 1,
    restoreLife: 0,
    source: golden_boots,
  },
  {
    id: uuid.v4(),
    itemId: 1002,
    itemName: 'plate_armor',
    itemUIName: 'Plate Armor',
    itemType: 'armor',
    description: 'the Plate Armor is to the heros',
    power: 0,
    defense: 5,
    precision: 5,
    intelligence: 1,
    restoreLife: 0,
    source: plate_armor,
  },
  {
    id: uuid.v4(),
    itemId: 1003,
    itemName: 'plate_helmet',
    itemUIName: 'Plate Helmet',
    itemType: 'helmet',
    description: 'the plate of the heros',
    power: 0,
    defense: 5,
    precision: 5,
    intelligence: 0,
    restoreLife: 0,
    source: plate_helmet,
  },
  {
    id: uuid.v4(),
    itemId: 1004,
    itemName: 'rapier_sword',
    itemUIName: 'Rapier Sword',
    itemType: 'weapon',
    description: 'the agile sword',
    power: 5,
    defense: 0,
    precision: 2,
    intelligence: 0,
    restoreLife: 0,
    source: rapier_sword,
  },
  {
    id: uuid.v4(),
    itemId: 1005,
    itemName: 'steel_sword',
    itemUIName: 'Steel Sword',
    itemType: 'weapon',
    description: 'the agile sword of the heros',
    power: 7,
    defense: 0,
    precision: 3,
    intelligence: 0,
    restoreLife: 0,
    source: steel_sword,
  },
  {
    id: uuid.v4(),
    itemId: 1006,
    itemName: 'wooden_shield',
    itemUIName: 'Wooden Shield',
    itemType: 'shield',
    description: 'the simple shield, warning!',
    power: 0,
    defense: 2,
    precision: 0,
    intelligence: 0,
    restoreLife: 0,
    source: wooden_shield,
  },
  {
    id: uuid.v4(),
    itemId: 1007,
    itemName: 'wooden_wand',
    itemUIName: 'Wooden Wand',
    itemType: 'wand',
    description: 'the simple wand, warning!',
    power: 0,
    defense: 0,
    precision: 2,
    intelligence: 2,
    restoreLife: 0,
    source: wooden_wand,
  },
  {
    id: uuid.v4(),
    itemId: 1008,
    itemName: 'crossbow',
    itemUIName: 'Crossbow',
    itemType: 'distance',
    description: 'a true crossbow',
    power: 5,
    defense: 0,
    precision: 5,
    intelligence: 0,
    restoreLife: 0,
    source: crossbow,
  },
];
