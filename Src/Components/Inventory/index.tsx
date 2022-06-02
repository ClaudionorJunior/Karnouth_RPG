import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Item } from '../../@types';
import { normalizePixel } from '../../Helpers';
import { RootState } from '../../Store/state';
import Slotitem from '../SlotItem';
import { Typography } from '../../Elements';
import { useMakeFakeSlotWithItems } from '../../Hooks';

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

  return (
    <FlatList
      columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-around' }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Typography text="inventory" textSize="medium" />}
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
