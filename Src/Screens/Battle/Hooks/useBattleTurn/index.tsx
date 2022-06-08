import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MonsterStatusActions } from '../../../../Store/MonsterStatusSlice';
import { RootState } from '../../../../Store/state';
import { PlayerStatusActions } from '../../../../Store/PlayerStatusSlice';
import { BattleHistoryActions } from '../../../../Store/BattleHistorySlice';

interface UseBattleTurnReturns {
  handleBattle: () => void;
  isYourTurn: boolean;
}

type BattleCreature = 'player' | 'monster';

const useBattleTurn = (): UseBattleTurnReturns => {
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

  const managerMessageCombat = (hitPoint: number) => {
    let message = '';
    if (battleTurn === 'player' && hitPoint > 0) {
      message = `you hit ${hitPoint} damage to the monster`;
    } else if (battleTurn === 'player' && hitPoint === 0) {
      message = `the monster blocked your damage`;
    } else if (battleTurn === 'monster' && hitPoint > 0) {
      message = `you lose ${hitPoint} of life by the monster damage`;
    } else if (battleTurn === 'monster' && hitPoint === 0) {
      message = `you blocked monster damage`;
    }
    if (!monsterState.monsterDead && message && battleTurn) {
      dispatch(BattleHistoryActions.addBattleHistory(message));
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let amount: number | undefined;

    if (battleTurn === 'player') {
      amount = calcHitPoints(battleTurn);
      if (!monsterState.monsterDead) {
        dispatch(
          MonsterStatusActions.changeCurrentLife({
            amount,
            typeToChange: 'take off',
          }),
        );
      }

      timer = setTimeout(() => {
        setBattleTurn('monster');
      }, 700);
    }
    if (battleTurn === 'monster') {
      amount = calcHitPoints(battleTurn);
      if (!monsterState.monsterDead) {
        dispatch(
          PlayerStatusActions.changeCurrentLife({
            amount,
            typeToChange: 'take off',
          }),
        );
      }

      timer = setTimeout(() => {
        setBattleTurn(undefined);
      }, 700);
    }

    if (!monsterState.monsterDead && monsterState.Monster) {
      amount !== undefined && managerMessageCombat(amount);
    }

    return () => timer && clearTimeout(timer);
  }, [battleTurn, monsterState.monsterDead]);

  useEffect(() => {
    if (monsterState.monsterDead) {
      dispatch(PlayerStatusActions.addPlayerExp(monsterState.Monster?.xp || 0));
      dispatch(MonsterStatusActions.resetAllStatus());
      dispatch(BattleHistoryActions.resetAllStatus());
      // TODO - abrir modal de loot
    }
  }, [monsterState.monsterDead]);

  const handleBattle = useCallback(() => {
    setBattleTurn('player');
  }, []);

  return {
    handleBattle,
    isYourTurn: !battleTurn,
  };
};

export default useBattleTurn;
