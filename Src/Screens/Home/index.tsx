import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Inventory,
  ItemsEquippedPlayer,
  LoadingScreen,
  PlayerStatus,
} from '../../Components';
import { LineWrapper } from '../../Elements';
import { RootState } from '../../Store/state';
import { Container } from './styles';
import { useAutoRegerateLife } from '../../Hooks';
import { PlayerManagerItemsActions } from '../../Store/PlayerManagerItemsSlice';

const Home = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const bodyItemsState = useSelector(
    (state: RootState) => state.PlayerManagerItemsState.bodyItems,
  );
  const dispatch = useDispatch();
  const { restoreLife } = useAutoRegerateLife();

  useFocusEffect(
    useCallback(() => {
      if (!bodyItemsState.length) {
        dispatch(PlayerManagerItemsActions.addGoldItemOnBody());
      }
    }, [bodyItemsState]),
  );

  useFocusEffect(
    useCallback(() => {
      if (playerState.currentPlayerLifePoints < playerState.playerLifePoints) {
        restoreLife();
      }
    }, [playerState.currentPlayerLifePoints]),
  );

  if (!playerState) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <PlayerStatus />
      <LineWrapper />
      <ItemsEquippedPlayer />
      <LineWrapper />
      <Inventory localPressed="inventory" howManySlots={25} />
    </Container>
  );
};

export default Home;
