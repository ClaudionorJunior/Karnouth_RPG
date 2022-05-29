import React from 'react';
import Slotitem from '../SlotItem';
import { Container } from './styles';
import XSlotItems from './XSlotItems';

const ItemsEquippedPlayer = () => {
  return (
    <Container>
      <Slotitem />
      <XSlotItems />
      <Slotitem />
      <Slotitem />
    </Container>
  );
};

export default ItemsEquippedPlayer;
