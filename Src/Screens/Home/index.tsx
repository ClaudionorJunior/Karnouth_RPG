import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Inventory,
  ItemsEquippedPlayer,
  LoadingScreen,
  PlayerPointsDistribution,
  PlayerStatus,
} from '../../Components';
import { LineWrapper, Typography } from '../../Elements';
import { RootState } from '../../Store/state';
import { Container, PointsContainerText } from './styles';
import { useAutoRegerateLife } from '../../Hooks';
import { PlayerManagerItemsActions } from '../../Store/PlayerManagerItemsSlice';
import { normalizePixel } from '../../Helpers';

const Home = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const bodyItemsState = useSelector(
    (state: RootState) => state.PlayerManagerItemsState.bodyItems,
  );
  const dispatch = useDispatch();
  const { restoreLife } = useAutoRegerateLife();
  const { colors } = useTheme();

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
      {!!playerState?.remainingPoints && (
        <>
          <PointsContainerText>
            <AntDesign
              name="star"
              size={normalizePixel(16)}
              color={colors.primary2}
            />
            <Typography
              text={`you have ${playerState?.remainingPoints} points to distribute`}
              textSize="paragraphy"
              color={colors.primary2}
              containerStyles={{ textDecorationLine: 'underline' }}
            />
          </PointsContainerText>
          <PlayerPointsDistribution isToDistributeOnLevel />
        </>
      )}

      <LineWrapper />
      <ItemsEquippedPlayer />
      <LineWrapper />
      <Inventory localPressed="inventory" howManySlots={25} />
    </Container>
  );
};

export default Home;
