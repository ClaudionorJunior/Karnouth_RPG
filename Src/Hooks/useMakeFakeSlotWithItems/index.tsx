import { useMemo } from 'react';
import uuid from 'react-native-uuid';
import { Item } from '../../@types';

/**
 * @param items Item[]
 * @param howManySlots 8(to MAX_HUNT_INVENTORY) or 25(to MAX_INVENTORY)
 * @returns Item[]
 */
const useMakeFakeSlotWithItems = (
  items: Item[],
  howManySlots: 8 | 25,
): Item[] => {
  const fakeArray = useMemo(() => {
    let tempNewArray: Item[] = [];
    for (let index = 0; index < howManySlots - items.length; index++) {
      tempNewArray.push({
        id: uuid.v4(),
      });
    }
    return tempNewArray;
  }, [items]);

  return [...items, ...fakeArray];
};

export default useMakeFakeSlotWithItems;
