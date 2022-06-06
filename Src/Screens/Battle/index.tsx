import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlayerStatus, MonsterStatus } from '../../Components';
import { ButtonBattle, LineWrapper, Typography } from '../../Elements';
import { BattleHistoryActions } from '../../Store/BattleHistorySlice';
import { MonsterStatusActions } from '../../Store/MonsterStatusSlice';
import ScrollTurns from './Components/ScrollTurns';
import useModalSelectMonster, {
  ModalItemDetailProvider,
} from './Hooks/useModalSelectMonster';
import { Container, ContainerBtnBattle } from './styles';

const Battle = () => {
  const [isDisabled, setIsDisbled] = useState<boolean>(false);
  const { showModalMonsters } = useModalSelectMonster();
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(BattleHistoryActions.resetAllStatus());
      dispatch(MonsterStatusActions.resetAllStatus());
      showModalMonsters();
    }, []),
  );
  return (
    <ModalItemDetailProvider>
      <Container>
        <PlayerStatus />
        <ContainerBtnBattle>
          <Typography text="Attack" textSize="small" />
          <ButtonBattle disabled={!isDisabled} onPress={() => {}} />
          {!isDisabled && (
            <Typography text="waiting your turn" textSize="paragraphy" />
          )}
        </ContainerBtnBattle>
        <LineWrapper />
        <ScrollTurns />
        <LineWrapper />
        <MonsterStatus />
      </Container>
    </ModalItemDetailProvider>
  );
};

export default Battle;
