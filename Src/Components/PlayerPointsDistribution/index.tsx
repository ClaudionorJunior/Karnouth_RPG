import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonPutOrTakeOff } from '~/elements/ButtonPutOrTakeOff';
import { Typography } from '~/elements/Typography';
import {
  ChangePlayerStatusParams,
  PlayerStatusActions,
} from '~/store/PlayerStatusSlice';
import { RootState } from '~/store/state';
import {
  Container,
  SelectableContainer,
  StatusName,
  StatusQuantity,
} from './styles';

interface PlayerPointsDistributionProps {
  isToDistributeOnLevel?: boolean;
}

export const PlayerPointsDistribution = ({
  isToDistributeOnLevel = false,
}: PlayerPointsDistributionProps) => {
  const PlayerState = useSelector((state: RootState) => state.PlayerState);
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

  if (!PlayerState.playerType) {
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
            PlayerState.remainingPoints === 10
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
            text={PlayerState?.[PlayerState.playerType].life.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !PlayerState.remainingPoints}
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
            PlayerState.remainingPoints === 10
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
              PlayerState?.[PlayerState.playerType].precision.toString() || ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !PlayerState.remainingPoints}
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
            PlayerState.remainingPoints === 10
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
              PlayerState?.[PlayerState.playerType].defense.toString() || ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !PlayerState.remainingPoints}
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
            PlayerState.remainingPoints === 10 ||
            PlayerState?.[PlayerState?.playerType]?.power === 0
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
            text={PlayerState?.[PlayerState.playerType].power.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            !PlayerState.remainingPoints ||
            PlayerState?.[PlayerState?.playerType]?.power === 0
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
            PlayerState.remainingPoints === 10 ||
            PlayerState?.[PlayerState?.playerType]?.intelligence === 0
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
              PlayerState?.[PlayerState.playerType].intelligence.toString() ||
              ''
            }
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            !PlayerState.remainingPoints ||
            PlayerState?.[PlayerState?.playerType]?.intelligence === 0
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
