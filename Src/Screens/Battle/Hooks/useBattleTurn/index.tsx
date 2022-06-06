import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MonsterStatusActions } from '../../../../Store/MonsterStatusSlice';
import { RootState } from '../../../../Store/state';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';

interface UseBattleTurnReturns {
  handleBattle: () => void;
}

type BattleCreature = 'player' | 'monster';

const useBattleTurn = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const monsterState = useSelector((state: RootState) => state.MonsterState);
  const [battleTurn, setBattleTurn] = useState<BattleCreature>();
  const dispatch = useDispatch();

  const attrsState = useMemo(() => {
    return {
      playerLvl: playerState.level,
      playerPwr: playerState[playerState.playerType!].power,
      playerInt: playerState[playerState.playerType!].intelligence,
      playerDef: playerState[playerState.playerType!].defense,
      playerPrec: playerState[playerState.playerType!].precision,
      monsterPwr: monsterState.Monster?.power || 0,
      monsterDef: monsterState.Monster?.defense || 0,
    };
  }, [playerState, monsterState]);

  const calcHitPoints = (turn: BattleCreature) => {
    let pwr = 0;
    let def = 0;
    let prec = 0;
    let level = 1;

    let randomicDefFactor = Math.random();
    let randomicAtkFactor = Math.random();

    pwr = turn === 'player' ? attrsState.playerPwr : attrsState.monsterPwr;
    def = turn === 'player' ? attrsState.monsterDef : attrsState.playerDef;
    prec = turn === 'player' ? attrsState.playerPrec : attrsState.monsterPwr;
    level = turn === 'player' ? attrsState.playerLvl : attrsState.monsterPwr;

    if (playerState.playerType === 'Mage') {
      pwr = turn === 'player' ? attrsState.playerInt : attrsState.monsterPwr;
    }

    // eslint-disable-next-line prettier/prettier
      let factorForceCalc = (randomicAtkFactor * 2) * (pwr + level + (prec / 2));
    let factorDefCalc = def * randomicDefFactor + def;

    if (Math.round(factorForceCalc - factorDefCalc) >= 1) {
      return Math.round(factorForceCalc - factorDefCalc);
    }
    return 0;
  };

  useEffect(() => {
    if (battleTurn === 'player') {
      const amount = calcHitPoints(battleTurn);
      dispatch(
        MonsterStatusActions.changeCurrentLife({
          amount,
          typeToChange: 'take off',
        }),
      );
      // depois de 800 milisegundos, passar a vez
    }
    if (battleTurn === 'monster') {
      const amount = calcHitPoints(battleTurn);
      dispatch(
        PlayerStatusActions.changeCurrentLife({
          amount,
          typeToChange: 'take off',
        }),
      );
      // depois de 800 milisegundos, passar a vez setando undefined no battleTurn
    }
  }, [battleTurn]);

  const handleBattle = useCallback(() => {
    setBattleTurn('player');
  }, []);

  return {
    handleBattle,
  };
};

export default useBattleTurn;
