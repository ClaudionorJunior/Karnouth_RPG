import React, { useCallback, useEffect, useState } from 'react';
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

interface PlayerPointsDistributionProps {
  isToDistributeOnLevel?: boolean;
}

const PlayerPointsDistribution = ({
  isToDistributeOnLevel = false,
}: PlayerPointsDistributionProps) => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();

  const handlePoints = useCallback((payload: ChangePlayerStatusParams) => {
    setIsloading(true);
    dispatch(PlayerStatusActions.changePlayerStatus(payload));
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsloading(false);
      }, 250);
    }

    return () => timer && clearTimeout(timer);
  }, [isLoading]);

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
          disabled={
            isToDistributeOnLevel ||
            isLoading ||
            playerState.remainingPoints === 10
          }
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
          disabled={
            isToDistributeOnLevel ||
            isLoading ||
            playerState.remainingPoints === 10
          }
          onPress={() =>
            handlePoints({
              statusType: 'precision',
              typeToChange: 'take off',
            })
          }
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={
              playerState?.[playerState.playerType].precision.toString() || ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={() =>
            handlePoints({
              statusType: 'precision',
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
          disabled={
            isToDistributeOnLevel ||
            isLoading ||
            playerState.remainingPoints === 10
          }
          onPress={() =>
            handlePoints({
              statusType: 'defense',
              typeToChange: 'take off',
            })
          }
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={
              playerState?.[playerState.playerType].defense.toString() || ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={() =>
            handlePoints({
              statusType: 'defense',
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
            isToDistributeOnLevel ||
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
            isToDistributeOnLevel ||
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
