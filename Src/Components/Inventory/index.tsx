import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { Item } from '../../@types';
import { normalizePixel, selectItemById } from '../../Helpers';
import { RootState } from '../../Store/state';
import Slotitem from '../SlotItem';
import { Typography } from '../../Elements';
import { useMakeFakeSlotWithItems } from '../../Hooks';
import { PlayerManagerItemsActions } from '../../Store/PlayerManagerItemsSlice';

const RenderSlot = (item: Item) => (
  <>
    <Slotitem
      localPressed="inventory"
      item={item}
      containerStyles={{ marginTop: normalizePixel(8) }}
    />
  </>
);

const Inventory = () => {
  const inventoryItemsState = useSelector(
    (state: RootState) => state.PlayerManagerItemsState.inventoryItems,
  );
  const newItemsToSlot = useMakeFakeSlotWithItems(inventoryItemsState, 25);

  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1000)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1001)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1002)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1003)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1004)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1005)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1006)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1007)),
  //     );
  //     dispatch(
  //       PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1008)),
  //     );
  //   }, []),
  // );

  const dispatch = useDispatch();

  return (
    <FlatList
      columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-around' }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <Typography text="inventory" textSize="medium" />
        </>
      }
      ListHeaderComponentStyle={{ alignItems: 'center' }}
      keyExtractor={item => item.id.toString()}
      numColumns={5}
      horizontal={false}
      data={newItemsToSlot}
      renderItem={({ item }) => RenderSlot(item)}
    />
  );
};

export default Inventory;
