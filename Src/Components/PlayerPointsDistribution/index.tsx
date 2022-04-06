import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonPutOrTakeOff, Typography } from '../../Elements';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';
import { RootState } from '../../Store/state';
import {
  Container,
  SelectableContainer,
  StatusName,
  StatusQuantity,
} from './styles';

const PlayerPointsDistribution = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const dispatch = useDispatch();

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
          disabled={playerState.remainingPoints === 10}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'life',
                typeToChange: 'take off',
              }),
            )
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
          disabled={!playerState.remainingPoints}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'life',
                typeToChange: 'add',
              }),
            )
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Precision" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={!!playerState.remainingPoints}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'presicion',
                typeToChange: 'take off',
              }),
            )
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
          disabled={!playerState.remainingPoints}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'presicion',
                typeToChange: 'add',
              }),
            )
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Defence" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={!!playerState.remainingPoints}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'defence',
                typeToChange: 'take off',
              }),
            )
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
          disabled={!playerState.remainingPoints}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'defence',
                typeToChange: 'add',
              }),
            )
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Power" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={!!playerState.remainingPoints}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'power',
                typeToChange: 'take off',
              }),
            )
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
            !playerState.remainingPoints ||
            playerState?.[playerState?.playerType]?.power === 0
          }
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'power',
                typeToChange: 'add',
              }),
            )
          }
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Intelligence" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={!!playerState.remainingPoints}
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'intelligence',
                typeToChange: 'take off',
              }),
            )
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
            !playerState.remainingPoints ||
            playerState?.[playerState?.playerType]?.intelligence === 0
          }
          onPress={() =>
            dispatch(
              PlayerStatusActions.changePlayerStatus({
                statusType: 'intelligence',
                typeToChange: 'add',
              }),
            )
          }
          name="pluscircle"
        />
      </SelectableContainer>
    </Container>
  );
};

export default PlayerPointsDistribution;
