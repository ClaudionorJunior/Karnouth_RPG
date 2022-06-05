import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Item, LocalPressed } from '../../@types';
import { normalizePixel } from '../../Helpers';
import { RootState } from '../../Store/state';
import Slotitem from '../SlotItem';
import { Typography } from '../../Elements';
import { HowManySlots, useMakeFakeSlotWithItems } from '../../Hooks';

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

const Inventory = ({
  localPressed,
  howManySlots,
}: Omit<InventoryProps, 'item'>) => {
  const inventoryItemsState = useSelector(
    (state: RootState) => state.PlayerManagerItemsState.inventoryItems,
  );
  const sellerItemsState = useSelector(
    (state: RootState) => state.SellerManagerItemsState.sellingItems,
  );

  const currentInventory = useMemo(() => {
    if (localPressed === 'sellerInventory') {
      return sellerItemsState;
    }
    return inventoryItemsState;
  }, [sellerItemsState, inventoryItemsState]);

  const newItemsToSlot = useMakeFakeSlotWithItems(
    currentInventory,
    howManySlots,
  );

  return (
    <FlatList
      style={{ width: '100%' }}
      columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-around' }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <Typography
            text={
              localPressed === 'sellerInventory' ? 'seller items' : 'inventory'
            }
            textSize="medium"
          />
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

export default Inventory;
