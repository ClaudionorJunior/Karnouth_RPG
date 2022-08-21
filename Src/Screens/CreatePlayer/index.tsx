import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/routers';
import { PlayerPointsDistribution } from '~/components/PlayerPointsDistribution';
import { PlayerSelect } from '~/components/PlayerSelect';
import { PlayerTypies } from '~/@types';
import { Container, RemainingContainer } from './styles';
import { PlayerStatusActions } from '~/store/PlayerStatusSlice';
import { Typography } from '~/elements/Typography';
import { GhostButton } from '~/elements/GhostButton';
import { Button } from '~/elements/Button';
import { RootState } from '~/store/state';
import { classDescription } from './helpers';
import { normalizePixel } from '~/helpers';

const PLAYERS_TYPE: PlayerTypies[] = ['Warrior', 'Mage', 'Ranger'];

const CreatePlayer = () => {
  const [lastClass, setLastClass] = useState<PlayerTypies>();
  const PlayerState = useSelector((state: RootState) => state.PlayerState);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSelectPlayer = useCallback(
    (player: PlayerTypies) => {
      dispatch(PlayerStatusActions.changePlayerClass(player));
      setLastClass(player);

      dispatch(PlayerStatusActions.resetRemainingPoints({}));

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
      {PlayerState.playerType && (
        <Typography
          containerStyles={{
            marginTop: 16,
            marginBottom: 16,
            textAlign: 'center',
          }}
          text={classDescription[PlayerState.playerType]}
          textSize="paragraphy"
        />
      )}
      {PlayerState.playerType && (
        <RemainingContainer>
          <Typography
            containerStyles={{ marginBottom: 16 }}
            text={`Remaining points: ${PlayerState.remainingPoints}`}
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
        disabled={!!PlayerState.remainingPoints}
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
