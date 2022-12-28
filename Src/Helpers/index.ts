/* eslint-disable prefer-destructuring */
import {
  Dimensions,
  ImageSourcePropType,
  PixelRatio,
  Platform,
} from 'react-native';
import uuid from 'react-native-uuid';
import { Item, PlayerTypies } from '~/@types';
import { Mage, Ranger, Warrior } from '~/assets';
import { AllItems } from '~/assets/Items/__items__';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 360;
const hscale: number = SCREEN_HEIGHT / 640;

export const normalizePixel = (
  size: number,
  based: 'width' | 'height' = 'width',
) => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const avatarImgMap = (playerType: PlayerTypies): ImageSourcePropType => {
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
export const selectItemById = (itemId: number): Item => {
  let tempItem = AllItems.filter(it => it.itemId === itemId)[0];
  tempItem.id = uuid.v4();
  return tempItem;
};

/**
 * @description This method is to mask when gold is bigger than 1.000.000.000 returning 999kk like string
 * @param amount
 * @returns string - masked gold
 */
export const goldLengthMask = (amount: number): string => {
  if (amount >= 1000000000) {
    return '999kk';
  }
  return String(amount);
};

/**
 * @description This method is to create a randomic gold in array
 * @param receivedArr number[]
 * @returns number -  gold
 */
export const getRandomGoldByArray = (receivedArr: number[]) => {
  let min = 0;
  let max = 0;
  if (receivedArr.length === 0) {
    return 0;
  }
  if (receivedArr.length === 1) {
    return receivedArr[0];
  }
  if (receivedArr.length >= 2) {
    if (receivedArr[0] <= receivedArr[1]) {
      min = receivedArr[0];
      max = receivedArr[1];
    } else {
      min = receivedArr[1];
      max = receivedArr[0];
    }
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const removeOneItemLogic = (
  daties: Item[],
  idToRemove: string | number[],
): Item[] => {
  let counter = 0;
  return daties.filter(it => {
    if (it.id !== idToRemove) {
      return it;
    }

    if (it.id === idToRemove && counter > 0) {
      return it;
    }

    counter = 1;
  });
};
