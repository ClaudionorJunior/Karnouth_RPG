import { useDispatch } from 'react-redux';
import { AMOUNT_TO_REGENATE_LIFE, TIME_TO_REGENATE_LIFE } from '../../global';
import { PlayerStatusActions } from '../../store/PlayerStatusSlice';

interface UseAutoRegerateLifeReturns {
  restoreLife: () => void;
}

const useAutoRegerateLife = (): UseAutoRegerateLifeReturns => {
  const dispatch = useDispatch();
  const restoreLife = () => {
    setTimeout(() => {
      dispatch(
        PlayerStatusActions.changeCurrentLife({
          amount: AMOUNT_TO_REGENATE_LIFE,
          typeToChange: 'add',
        }),
      );
    }, TIME_TO_REGENATE_LIFE);
  };

  return {
    restoreLife,
  };
};

export default useAutoRegerateLife;
