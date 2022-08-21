import React, { useCallback } from 'react';
import { ViewStyle } from 'react-native';
import { Item, LocalPressed } from '../../@types';
import useModalItemDetail from '../../hooks/useModalItemDetail';

import { Container, Image } from './styles';

interface Props {
  item?: Item;
  localPressed?: LocalPressed;
  containerStyles?: ViewStyle;
}

export const Slotitem = ({ item, localPressed, containerStyles }: Props) => {
  const { showModalDetails } = useModalItemDetail();

  const handleSlot = useCallback(() => {
    if (!!item && !!item.itemName && !!localPressed) {
      showModalDetails(item, localPressed);
    }
  }, [item, item?.itemName, localPressed]);

  return (
    <Container style={containerStyles} onPress={handleSlot}>
      {item?.source && <Image source={item.source} />}
    </Container>
  );
};
