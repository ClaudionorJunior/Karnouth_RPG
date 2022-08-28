import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MonsterStatus } from '~/components/MonsterStatus';
import { PlayerStatus } from '~/components/PlayerStatus';
import { Typography } from '~/elements/Typography';
import { ButtonBattle } from '~/elements/ButtonBattle';
import { LineWrapper } from '~/elements/LineWrapper';
import { BattleHistoryActions } from '~/store/BattleHistory/slice';
import { MonsterStatusActions } from '~/store/MonsterStatus/slice';
import { ScrollTurns } from './components/ScrollTurns';
import useBattleTurn from './hooks/useBattleTurn';
import useModalSelectMonster, {
  ModalSelectMonsterProvider,
} from './hooks/useModalSelectMonster';
import { Container, ContainerBtnBattle } from './styles';
import { useAppSelector } from '~/hooks/useAppSelector';

const Battle = () => {
  const { handleBattle, isYourTurn } = useBattleTurn();
  const { showModalMonsters, hideModalMonsters } = useModalSelectMonster();
  const dispatch = useDispatch();
  const { MonsterState } = useAppSelector(state => state);

  useFocusEffect(
    useCallback(() => {
      dispatch(BattleHistoryActions.resetAllStatus());
      dispatch(MonsterStatusActions.resetAllStatus());
      showModalMonsters();
    }, []),
  );

  useEffect(() => {
    return () => hideModalMonsters();
  }, []);

  return (
    <ModalSelectMonsterProvider>
      <Container>
        <PlayerStatus />
        <ContainerBtnBattle>
          <Typography text="Attack" textSize="small" />
          <ButtonBattle
            disabled={!isYourTurn || !MonsterState.Monster}
            onPress={handleBattle}
          />
          {!isYourTurn && (
            <Typography text="waiting your turn" textSize="paragraphy" />
          )}
        </ContainerBtnBattle>
        <LineWrapper />
        <ScrollTurns />
        <LineWrapper />
        <MonsterStatus showModalMonsters={showModalMonsters} />
      </Container>
    </ModalSelectMonsterProvider>
  );
};

export default Battle;
