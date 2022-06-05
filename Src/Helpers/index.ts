import {
  Dimensions,
  ImageSourcePropType,
  PixelRatio,
  Platform,
} from 'react-native';
import uuid from 'react-native-uuid';
import { Item, PlayerTypies } from '../@types';
import { Mage, Ranger, Warrior } from '../Assets';
import { AllItems } from '../Assets/Items/@types';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 360;
const hscale: number = SCREEN_HEIGHT / 640;

const normalizePixel = (size: number, based: 'width' | 'height' = 'width') => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const avatarImgMap = (playerType: PlayerTypies): ImageSourcePropType => {
  // TODO deve ter um parametro de monster ou player
  switch (playerType) {
    case 'Mage':
      return Mage;
    case 'Warrior':
      return Warrior;
    default:
      return Ranger;
  }
};

/**
 *
 * @param id - between 1000 and 9999
 * @returns Item
 */
const selectItemById = (itemId: number): Item => {
  let tempItem = AllItems.filter(it => it.itemId === itemId)[0];
  tempItem.id = uuid.v4();
  return tempItem;
};

/**
 * @description This method is to mask when gold is bigger than 1.000.000.000 returning 999kk like string
 * @param amount
 * @returns string - masked gold
 */
const goldLengthMask = (amount: number): string => {
  if (amount >= 1000000000) {
    return '999kk';
  }
  return String(amount);
};

export { normalizePixel, avatarImgMap, selectItemById, goldLengthMask };
