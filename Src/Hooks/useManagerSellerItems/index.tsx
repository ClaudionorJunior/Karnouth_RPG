import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllItems } from '../../Assets/Items/@types';
import { SellerManagerItemsActions } from '../../Store/SellerManagerItemsSlice';
import { RootState } from '../../Store/state';

const useManagerSellerItems = () => {
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

  const sendItemToSeller = useCallback((itemIds: number[]) => {
    dispatch(SellerManagerItemsActions.addSellerItem(itemIds));
  }, []);

  useFocusEffect(
    useCallback(() => {
      const tempCalc = 1000 * 60 * 40;
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

      if (sellingItems.length > 0 && dateNow > tempLastSee) {
        dispatch(SellerManagerItemsActions.changeLastSee(dateNow));
        setTimeout(() => {
          dispatch(SellerManagerItemsActions.resetSellerItems());
        }, 50);

        setTimeout(() => {
          sendItemToSeller(itemIds);
        }, 100);
      }

      if (sellingItems.length === 0) {
        sendItemToSeller(itemIds);
      }
    }, []),
  );
};

export default useManagerSellerItems;
