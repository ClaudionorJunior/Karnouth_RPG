import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MonsterStatusActions } from '~/store/MonsterStatus/slice';
import { RootState } from '~/store/@types';
import { PlayerStatusActions } from '~/store/PlayerStatus/slice';
import { BattleHistoryActions } from '~/store/BattleHistory/slice';
import useModalRewards from '../useModalRewards';
import { LootManagerActions } from '~/store/LootManager/slice';
import { PlayerManagerItemsActions } from '~/store/PlayerManagerItems/slice';
import { getRandomGoldByArray } from '~/helpers';
import { TURN_DURATION } from '~/global';

interface UseBattleTurnReturns {
  handleBattle: () => void;
  isYourTurn: boolean;
}

type BattleCreature = 'player' | 'monster';

const useBattleTurn = (): UseBattleTurnReturns => {
  const PlayerState = useSelector((state: RootState) => state.PlayerState);
  const monsterState = useSelector((state: RootState) => state.MonsterState);
  const [battleTurn, setBattleTurn] = useState<BattleCreature>();
  const { showModalRewards } = useModalRewards();
  const dispatch = useDispatch();

  const attrsState = useMemo(() => {
    return {
      playerLvl: PlayerState.level,
      playerPwr: PlayerState[PlayerState.playerType!].power,
      playerInt: PlayerState[PlayerState.playerType!].intelligence,
      playerDef: PlayerState[PlayerState.playerType!].defense,
      playerPrec: PlayerState[PlayerState.playerType!].precision,
      monsterPwr: monsterState.Monster?.power || 0,
      monsterDef: monsterState.Monster?.defense || 0,
    };
  }, [PlayerState, monsterState]);

  const monsterDead = useMemo(
    () => !!monsterState.monsterDead,
    [monsterState.monsterDead],
  );

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

    if (PlayerState.playerType === 'Mage') {
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

  const managerMessageCombat = useCallback(
    (hitPoint: number) => {
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
      if (!monsterDead && message && battleTurn) {
        dispatch(BattleHistoryActions.addBattleHistory(message));
      }
    },
    [monsterDead, battleTurn],
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let amount: number | undefined;

    if (battleTurn === 'player') {
      amount = calcHitPoints(battleTurn);
      if (!monsterDead) {
        dispatch(
          MonsterStatusActions.changeCurrentLife({
            amount,
            typeToChange: 'take off',
          }),
        );
      }

      timer = setTimeout(() => {
        setBattleTurn('monster');
      }, TURN_DURATION);
    }
    if (battleTurn === 'monster') {
      amount = calcHitPoints(battleTurn);
      if (!monsterDead) {
        dispatch(
          PlayerStatusActions.changeCurrentLife({
            amount,
            typeToChange: 'take off',
          }),
        );
      }

      timer = setTimeout(() => {
        setBattleTurn(undefined);
      }, TURN_DURATION);
    }

    if (!monsterDead && monsterState.Monster) {
      amount !== undefined && managerMessageCombat(amount);
    }

    return () => timer && clearTimeout(timer);
  }, [battleTurn, monsterDead]);

  useEffect(() => {
    if (monsterDead) {
      dispatch(PlayerStatusActions.addPlayerExp(monsterState.Monster?.xp || 0));
      dispatch(BattleHistoryActions.resetAllStatus());
      monsterState.Monster?.lote &&
        dispatch(LootManagerActions.addItemsToLoot(monsterState.Monster?.lote));
      monsterState.Monster?.rangeGold &&
        dispatch(
          PlayerManagerItemsActions.addGoldCoin(
            getRandomGoldByArray(monsterState.Monster?.rangeGold),
          ),
        );
      dispatch(MonsterStatusActions.resetAllStatus());
      showModalRewards();
    }
  }, [monsterDead]);

  const handleBattle = useCallback(() => {
    setBattleTurn('player');
  }, []);

  return {
    handleBattle,
    isYourTurn: !battleTurn,
  };
};

export default useBattleTurn;
