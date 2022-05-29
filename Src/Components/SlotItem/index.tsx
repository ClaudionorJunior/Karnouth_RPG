import React from 'react';
import { Image, ImageSourcePropType, ViewStyle } from 'react-native';
import { normalizePixel } from '../../Helpers';

import { Container } from './styles';

interface Props {
  source?: ImageSourcePropType;
  containerStyles?: ViewStyle;
}

const Slotitem = ({ source, containerStyles }: Props) => {
  return (
    <Container style={containerStyles}>
      {source && (
        <Image
          style={{ width: normalizePixel(48), height: normalizePixel(48) }}
          source={source}
        />
      )}
    </Container>
  );
};

export default Slotitem;
