import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { normalizePixel } from '../../Helpers';

import { Container } from './styles';

interface Props {
  source?: ImageSourcePropType;
}

const Slotitem = ({ source }: Props) => {
  return (
    <Container>
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
