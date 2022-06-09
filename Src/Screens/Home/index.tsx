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
  const PlayerState = useSelector((state: RootState) => state.PlayerState);
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
      if (PlayerState.currentPlayerLifePoints < PlayerState.playerLifePoints) {
        restoreLife();
      }
    }, [PlayerState.currentPlayerLifePoints]),
  );

  if (!PlayerState) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <PlayerStatus />
      {!!PlayerState?.remainingPoints && (
        <>
          <PointsContainerText>
            <AntDesign
              name="star"
              size={normalizePixel(16)}
              color={colors.primary2}
            />
            <Typography
              text={`you have ${PlayerState?.remainingPoints} points to distribute`}
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
