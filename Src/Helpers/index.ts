import {
  Dimensions,
  ImageSourcePropType,
  PixelRatio,
  Platform,
} from 'react-native';
import { PlayerTypies } from '../@types';
import { Mage, Ranger, Warrior } from '../Assets';

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
  switch (playerType) {
    case 'Mage':
      return Mage;
    case 'Warrior':
      return Warrior;
    default:
      return Ranger;
  }
};

export { normalizePixel, avatarImgMap };
