import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';
import { RootState } from '../../Store/state';

const useLevelManager = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (playerState.playerXPPoints >= playerState.xpToNextLevel) {
      calcXpToNextLevel();
    }
  }, [playerState.playerXPPoints, playerState.xpToNextLevel]);

  const calcXpToNextLevel = useCallback(() => {
    const nextPlayerLevel = playerState.level + 1;
    // eslint-disable-next-line prettier/prettier
    const nextXpNeeded = (50 * ((playerState.level**3 - (6 * playerState.level**2)) + ((17*playerState.level) - 12))) / 3

    dispatch(
      PlayerStatusActions.onChangePlayerLevel({
        level: nextPlayerLevel,
        xpToNextLevel: nextXpNeeded,
      }),
    );
  }, [playerState.level]);
};

export default useLevelManager;
