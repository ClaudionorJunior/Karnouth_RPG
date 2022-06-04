import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/routers';
import { PlayerPointsDistribution, PlayerSelect } from '../../Components';
import { PlayerTypies } from '../../@types';
import { Container, RemainingContainer } from './styles';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';
import { Button, GhostButton, Typography } from '../../Elements';
import { RootState } from '../../Store/state';
import { classDescription } from './Helpers';
import { normalizePixel } from '../../Helpers';

const PLAYERS_TYPE: PlayerTypies[] = ['Warrior', 'Mage', 'Ranger'];

const CreatePlayer = () => {
  const [lastClass, setLastClass] = useState<PlayerTypies>();
  const playerState = useSelector((state: RootState) => state.playerState);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSelectPlayer = useCallback(
    (player: PlayerTypies) => {
      dispatch(PlayerStatusActions.changePlayerClass(player));
      setLastClass(player);

      dispatch(PlayerStatusActions.resetRemainingPoints());

      if (lastClass && lastClass !== player) {
        dispatch(PlayerStatusActions.resetPartialStatus());
      }
    },
    [lastClass],
  );

  const handleConfirm = useCallback(() => {
    navigation.dispatch(StackActions.replace('TabNavigator'));
  }, [navigation]);

  return (
    <Container>
      {PLAYERS_TYPE.map((player, index) => (
        <PlayerSelect
          key={index.toString()}
          onPress={() => handleSelectPlayer(player)}
          playerType={player}
        />
      ))}
      {playerState.playerType && (
        <Typography
          containerStyles={{
            marginTop: 16,
            marginBottom: 16,
            textAlign: 'center',
          }}
          text={classDescription[playerState.playerType]}
          textSize="paragraphy"
        />
      )}
      {playerState.playerType && (
        <RemainingContainer>
          <Typography
            containerStyles={{ marginBottom: 16 }}
            text={`Remaining points: ${playerState.remainingPoints}`}
            textSize="paragraphy"
          />
          <GhostButton
            text="To Reset Status"
            onPress={() => dispatch(PlayerStatusActions.resetAllStatus())}
          />
        </RemainingContainer>
      )}
      <PlayerPointsDistribution />

      <Button
        disabled={!!playerState.remainingPoints}
        containerStyles={{
          width: '100%',
          marginBottom: normalizePixel(32),
          marginTop: normalizePixel(16),
        }}
        text="Confirm"
        textSize="medium"
        onPress={handleConfirm}
      />
    </Container>
  );
};

export default CreatePlayer;
