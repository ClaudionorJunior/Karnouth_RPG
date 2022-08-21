import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Item, LocalPressed } from '~/@types';
import { normalizePixel } from '~/helpers';
import { RootState } from '~/store/state';
import { Slotitem } from '../SlotItem';
import { Typography } from '~/elements/Typography';
import { HowManySlots, useMakeFakeSlotWithItems } from '~/hooks';

interface InventoryProps {
  item: Item;
  localPressed: LocalPressed;
  howManySlots: HowManySlots;
}

const RenderSlot = ({
  item,
  localPressed,
}: Omit<InventoryProps, 'howManySlots'>) => (
  <>
    <Slotitem
      localPressed={localPressed}
      item={item}
      containerStyles={{ marginTop: normalizePixel(8) }}
    />
  </>
);

export const Inventory = ({
  localPressed,
  howManySlots,
}: Omit<InventoryProps, 'item'>) => {
  const inventoryItemsState = useSelector(
    (state: RootState) => state.PlayerManagerItemsState.inventoryItems,
  );
  const sellerItemsState = useSelector(
    (state: RootState) => state.SellerManagerItemsState.sellingItems,
  );
  const monsterRewards = useSelector(
    (state: RootState) => state.LootManagerState.loot,
  );

  const currentInventory = useMemo(() => {
    if (localPressed === 'sellerInventory') {
      return sellerItemsState;
    }

    if (localPressed === 'rewards') {
      return monsterRewards || [];
    }
    return inventoryItemsState;
  }, [sellerItemsState, inventoryItemsState, monsterRewards]);

  const newItemsToSlot = useMakeFakeSlotWithItems(
    currentInventory,
    howManySlots,
  );

  const findTitle = useMemo(() => {
    if (localPressed === 'sellerInventory') {
      return 'seller items';
    }
    if (localPressed === 'mallInventory') {
      return 'inventory';
    }

    if (localPressed === 'rewards') {
      return 'rewards';
    }

    return 'inventory';
  }, [sellerItemsState, inventoryItemsState]);

  return (
    <FlatList
      style={{ width: '100%' }}
      columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-around' }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <Typography text={findTitle} textSize="medium" />
        </>
      }
      ListHeaderComponentStyle={{ alignItems: 'center' }}
      keyExtractor={item => item.id.toString()}
      numColumns={5}
      horizontal={false}
      data={newItemsToSlot}
      renderItem={({ item }) => RenderSlot({ item, localPressed })}
    />
  );
};
