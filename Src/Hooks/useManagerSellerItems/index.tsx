import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllItems } from '../../Assets/Items/@types';
import { SellerManagerItemsActions } from '../../Store/SellerManagerItemsSlice';
import { RootState } from '../../Store/state';

const tempCalc = 1000 * 60 * 2;

const useManagerSellerItems = () => {
  const [counter, setCounter] = useState<number>(0);
  const dispatch = useDispatch();
  const { sellingItems, lastSee } = useSelector(
    (state: RootState) => state.SellerManagerItemsState,
  );

  const getRandomItem = useCallback(() => {
    let tempNum = AllItems[Math.floor(Math.random() * AllItems.length)].itemId;
    if (tempNum === 9999) {
      tempNum = AllItems[Math.floor(Math.random() * AllItems.length)].itemId;
    }
    return tempNum;
  }, []);

  const sendItemToSeller = useCallback(
    (itemIds: number[]) => {
      if (!sellingItems.length) {
        dispatch(SellerManagerItemsActions.addSellerItem(itemIds));
      }
    },
    [sellingItems],
  );

  useFocusEffect(
    useCallback(() => {
      let tempLastSee = 0;
      let dateNow = Date.now();
      let itemIds: number[] = [];

      if (lastSee) {
        tempLastSee = lastSee + tempCalc;
      }

      [1, 2, 3, 4, 5].forEach(() => {
        let num = getRandomItem();
        if (num) {
          itemIds.push(num);
        }
      });

      if (dateNow > tempLastSee) {
        dispatch(SellerManagerItemsActions.changeLastSee(dateNow));
        dispatch(SellerManagerItemsActions.resetSellerItems());
      }

      sendItemToSeller(itemIds);
    }, [counter]),
  );

  useEffect(() => {
    const timer = setInterval(() => setCounter(state => state + 1), 500);
    return () => clearInterval(timer);
  }, [counter]);
};

export default useManagerSellerItems;
