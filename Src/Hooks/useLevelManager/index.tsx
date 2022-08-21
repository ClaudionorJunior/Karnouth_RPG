import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerStatusActions } from '../../store/PlayerStatusSlice';
import { RootState } from '../../store/state';

const useLevelManager = () => {
  const PlayerState = useSelector((state: RootState) => state.PlayerState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (PlayerState.playerXPPoints >= PlayerState.xpToNextLevel) {
      calcXpToNextLevel();
    }
  }, [PlayerState.playerXPPoints, PlayerState.xpToNextLevel]);

  const calcXpToNextLevel = useCallback(() => {
    const nextPlayerLevel = PlayerState.level + 1;
    // eslint-disable-next-line prettier/prettier
    let nextXpNeeded = (50 * ((PlayerState.level**3 - (6 * PlayerState.level**2)) + ((17*PlayerState.level) - 12))) / 3

    if (nextXpNeeded < 300) {
      nextXpNeeded = 300;
    }

    if (PlayerState.playerXPPoints >= 300 && PlayerState.playerXPPoints < 450) {
      nextXpNeeded = 450;
    }

    if (PlayerState.playerXPPoints >= 450 && PlayerState.playerXPPoints < 600) {
      nextXpNeeded = 600;
    }

    dispatch(PlayerStatusActions.resetRemainingPoints({ points: 2 }));
    dispatch(
      PlayerStatusActions.onChangePlayerLevel({
        level: nextPlayerLevel,
        xpToNextLevel: nextXpNeeded,
      }),
    );
  }, [PlayerState.level, PlayerState.playerXPPoints]);
};

export default useLevelManager;
