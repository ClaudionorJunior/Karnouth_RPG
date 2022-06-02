import React from 'react';
import { ViewStyle } from 'react-native';
import { Item, LocalPressed } from '../../@types';
import { useModalItemDetail } from '../../Hooks';

import { Container, Image } from './styles';

interface Props {
  item?: Item;
  localPressed?: LocalPressed;
  containerStyles?: ViewStyle;
}

const Slotitem = ({ item, localPressed, containerStyles }: Props) => {
  const { show } = useModalItemDetail();

  return (
    <Container
      style={containerStyles}
      onLongPress={() =>
        item && item.itemName && localPressed && show(item, localPressed)
      }
    >
      {item?.source && <Image source={item.source} />}
    </Container>
  );
};

export default Slotitem;
