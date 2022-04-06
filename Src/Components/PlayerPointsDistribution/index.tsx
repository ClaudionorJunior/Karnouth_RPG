import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonPutOrTakeOff, Typography } from '../../Elements';
import {
  ChangePlayerStatusParams,
  PlayerStatusActions,
} from '../../Store/PlayerStatusSlice';
import { RootState } from '../../Store/state';
import {
  Container,
  SelectableContainer,
  StatusName,
  StatusQuantity,
} from './styles';

const PlayerPointsDistribution = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();

  const handlePoints = useCallback((payload: ChangePlayerStatusParams) => {
    setIsloading(true);
    dispatch(PlayerStatusActions.changePlayerStatus(payload));

    setTimeout(() => {
      setIsloading(false);
    }, 250);
  }, []);

  if (!playerState.playerType) {
    return <></>;
  }

  return (
    <Container>
      <SelectableContainer>
        <StatusName>
          <Typography text="Life" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={isLoading || playerState.remainingPoints === 10}
          onPress={() =>
            handlePoints({
              statusType: 'life',
              typeToChange: 'take off',
            })
          }
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={playerState?.[playerState.playerType].life.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={() =>
            handlePoints({
              statusType: 'life',
              typeToChange: 'add',
            })
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Precision" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={isLoading || playerState.remainingPoints === 10}
          onPress={() =>
            handlePoints({
              statusType: 'presicion',
              typeToChange: 'take off',
            })
          }
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={
              playerState?.[playerState.playerType].presicion.toString() || ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={() =>
            handlePoints({
              statusType: 'presicion',
              typeToChange: 'add',
            })
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Defence" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={isLoading || playerState.remainingPoints === 10}
          onPress={() =>
            handlePoints({
              statusType: 'defence',
              typeToChange: 'take off',
            })
          }
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={
              playerState?.[playerState.playerType].defence.toString() || ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={() =>
            handlePoints({
              statusType: 'defence',
              typeToChange: 'add',
            })
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Power" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            playerState.remainingPoints === 10 ||
            playerState?.[playerState?.playerType]?.power === 0
          }
          onPress={() =>
            handlePoints({
              statusType: 'power',
              typeToChange: 'take off',
            })
          }
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={playerState?.[playerState.playerType].power.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            !playerState.remainingPoints ||
            playerState?.[playerState?.playerType]?.power === 0
          }
          onPress={() =>
            handlePoints({
              statusType: 'power',
              typeToChange: 'add',
            })
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Intelligence" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            playerState.remainingPoints === 10 ||
            playerState?.[playerState?.playerType]?.intelligence === 0
          }
          onPress={() =>
            handlePoints({
              statusType: 'intelligence',
              typeToChange: 'take off',
            })
          }
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={
              playerState?.[playerState.playerType].intelligence.toString() ||
              ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            !playerState.remainingPoints ||
            playerState?.[playerState?.playerType]?.intelligence === 0
          }
          onPress={() =>
            handlePoints({
              statusType: 'intelligence',
              typeToChange: 'add',
            })
          }
          name="pluscircle"
        />
      </SelectableContainer>
    </Container>
  );
};

export default PlayerPointsDistribution;
