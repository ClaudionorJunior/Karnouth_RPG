import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/routers';
import { PlayerPointsDistribution, PlayerSelect } from '../../Components';
import { PlayerStatus, PlayerTypies } from '../../@types';
import { Container } from './styles';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';
import { Button, Typography } from '../../Elements';
import { RootState } from '../../Store/state';
import { classDescription } from './Helpers';
import { normalizePixel } from '../../Helpers';

const PLAYERS_TYPE: PlayerTypies[] = ['Warrior', 'Mage', 'Ranger'];

const CreatePlayer = () => {
  const [distribuitedPoints, setDistribuitedPoints] = useState<PlayerStatus>();
  const playerState = useSelector((state: RootState) => state.playerState);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSelectPlayer = useCallback((player: PlayerTypies) => {
    dispatch(PlayerStatusActions.changePlayerClass(player));
    dispatch(PlayerStatusActions.resetRemainingPoints());
  }, []);

  const handleConfirm = useCallback(() => {
    distribuitedPoints &&
      dispatch(PlayerStatusActions.changePlayerStatus(distribuitedPoints));
    navigation.dispatch(StackActions.replace('Home'));
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
        <Typography
          containerStyles={{ marginBottom: 16 }}
          text={`Remaining points: ${playerState.remainingPoints}`}
          textSize="paragraphy"
        />
      )}
      <PlayerPointsDistribution onReturnDistribution={setDistribuitedPoints} />

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
