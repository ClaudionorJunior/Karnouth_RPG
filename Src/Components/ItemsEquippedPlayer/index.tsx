import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Slotitem from '../SlotItem';
import {
  BodyContainer,
  Container,
  HandsContainer,
  SlotWithDescription,
} from './styles';
import { Typography } from '../../Elements';
import { RootState } from '../../Store/state';
import { goldLengthMask } from '../../Helpers';

const ItemsEquippedPlayer = () => {
  const bodyItemsState = useSelector(
    (state: RootState) => state.PlayerManagerItemsState.bodyItems,
  );

  const goldCoin = useMemo(() => {
    return bodyItemsState.filter(it => it.itemType === 'gold')[0];
  }, [bodyItemsState]);

  return (
    <Container>
      <Typography text="Equips" textSize="medium" />
      <BodyContainer>
        <SlotWithDescription>
          <Typography text="helmet" textSize="small" />
          <Slotitem
            localPressed="body"
            item={bodyItemsState.filter(it => it.itemType === 'helmet')[0]}
          />
        </SlotWithDescription>
        <SlotWithDescription>
          <Typography text="armor" textSize="small" />
          <Slotitem
            localPressed="body"
            item={bodyItemsState.filter(it => it.itemType === 'armor')[0]}
          />
        </SlotWithDescription>
        <SlotWithDescription>
          <Typography text="legs" textSize="small" />
          <Slotitem
            localPressed="body"
            item={bodyItemsState.filter(it => it.itemType === 'legs')[0]}
          />
        </SlotWithDescription>
        <SlotWithDescription>
          <Typography text="boots" textSize="small" />
          <Slotitem
            localPressed="body"
            item={bodyItemsState.filter(it => it.itemType === 'boots')[0]}
          />
        </SlotWithDescription>
      </BodyContainer>

      <HandsContainer>
        <SlotWithDescription>
          <Typography text="left hand" textSize="small" />
          <Slotitem
            localPressed="body"
            item={
              bodyItemsState.filter(
                it =>
                  it.itemType === 'weapon' ||
                  it.itemType === 'wand' ||
                  it.itemType === 'distance',
              )[0]
            }
          />
        </SlotWithDescription>

        <SlotWithDescription>
          <Typography text="right hand" textSize="small" />
          <Slotitem
            localPressed="body"
            item={bodyItemsState.filter(it => it.itemType === 'shield')[0]}
          />
        </SlotWithDescription>
        <SlotWithDescription>
          <Typography
            text={`${goldLengthMask(goldCoin?.amount || 0)}`}
            textSize="small"
          />
          <Slotitem localPressed="body" item={goldCoin} />
        </SlotWithDescription>
      </HandsContainer>
    </Container>
  );
};

export default ItemsEquippedPlayer;
