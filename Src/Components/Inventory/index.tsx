import React from 'react';
import { FlatList } from 'react-native';
import { normalizePixel } from '../../Helpers';
import Slotitem from '../SlotItem';

const RenderSlot = (data: number) => {
  return (
    <>
      <Slotitem containerStyles={{ marginTop: normalizePixel(8) }} />
    </>
  );
};

const Inventory = () => {
  return (
    <FlatList
      columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'space-around' }}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.toString()}
      numColumns={5}
      horizontal={false}
      data={[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
      ]}
      renderItem={({ item }) => RenderSlot(item)}
    />
  );
};

export default Inventory;
