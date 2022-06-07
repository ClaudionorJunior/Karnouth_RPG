import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlayerStatus, MonsterStatus } from '../../Components';
import { ButtonBattle, LineWrapper, Typography } from '../../Elements';
import { BattleHistoryActions } from '../../Store/BattleHistorySlice';
import { MonsterStatusActions } from '../../Store/MonsterStatusSlice';
import ScrollTurns from './Components/ScrollTurns';
import useBattleTurn from './Hooks/useBattleTurn';
import useModalSelectMonster, {
  ModalItemDetailProvider,
} from './Hooks/useModalSelectMonster';
import { Container, ContainerBtnBattle } from './styles';

const Battle = () => {
  const { handleBattle, isYourTurn } = useBattleTurn();
  const { showModalMonsters, hideModalMonsters } = useModalSelectMonster();
  const dispatch = useDispatch();

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
    <ModalItemDetailProvider>
      <Container>
        <PlayerStatus />
        <ContainerBtnBattle>
          <Typography text="Attack" textSize="small" />
          <ButtonBattle disabled={!isYourTurn} onPress={handleBattle} />
          {!isYourTurn && (
            <Typography text="waiting your turn" textSize="paragraphy" />
          )}
        </ContainerBtnBattle>
        <LineWrapper />
        <ScrollTurns />
        <LineWrapper />
        <MonsterStatus showModalMonsters={showModalMonsters} />
      </Container>
    </ModalItemDetailProvider>
  );
};

export default Battle;
