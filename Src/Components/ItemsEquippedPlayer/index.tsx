import React from 'react';
import Slotitem from '../SlotItem';
import {
  BodyContainer,
  Container,
  HandsContainer,
  SlotWithDescription,
} from './styles';
import { Typography } from '../../Elements';

const ItemsEquippedPlayer = () => {
  return (
    <Container>
      <Typography text="Equips" textSize="medium" />
      <BodyContainer>
        <SlotWithDescription>
          <Typography text="helmet" textSize="small" />
          <Slotitem />
        </SlotWithDescription>
        <SlotWithDescription>
          <Typography text="armor" textSize="small" />
          <Slotitem />
        </SlotWithDescription>
        <SlotWithDescription>
          <Typography text="legs" textSize="small" />
          <Slotitem />
        </SlotWithDescription>
        <SlotWithDescription>
          <Typography text="boots" textSize="small" />
          <Slotitem />
        </SlotWithDescription>
      </BodyContainer>

      <HandsContainer>
        <SlotWithDescription>
          <Typography text="left hand" textSize="small" />
          <Slotitem />
        </SlotWithDescription>

        <SlotWithDescription>
          <Typography text="right hand" textSize="small" />
          <Slotitem />
        </SlotWithDescription>
      </HandsContainer>
    </Container>
  );
};

export default ItemsEquippedPlayer;
