import { useMemo } from 'react';
import uuid from 'react-native-uuid';
import { Item } from '~/@types';

export type HowManySlots = 5 | 25;

/**
 * @param items Item[]
 * @param howManySlots 5(to MAX_HUNT_INVENTORY) or 25(to MAX_INVENTORY)
 * @returns Item[]
 */
const useMakeFakeSlotWithItems = (
  items: Item[],
  howManySlots: HowManySlots,
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
