import React, { useCallback } from 'react';
import { ButtonPutOrTakeOff } from '~/elements/ButtonPutOrTakeOff';
import { Typography } from '~/elements/Typography';
import { useAppDispatch } from '~/hooks/useAppDispatch';
import { useAppSelector } from '~/hooks/useAppSelector';
import { ChangePlayerStatusParams } from '~/store/PlayerStatus/@types';
import { addOrTakeOffPlayerStatusAsync } from '~/store/PlayerStatus/thunks/addOrTakeOffPlayerStatusAsync';
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
  const PlayerState = useAppSelector(state => state.PlayerState);
  const dispatch = useAppDispatch();

  const handlePoints = useCallback(
    (payload: ChangePlayerStatusParams) => {
      dispatch(addOrTakeOffPlayerStatusAsync(payload));
    },
    [PlayerState.isLoading],
  );

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
            PlayerState.isLoading ||
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
          disabled={PlayerState.isLoading || !PlayerState.remainingPoints}
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
            PlayerState.isLoading ||
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
          disabled={PlayerState.isLoading || !PlayerState.remainingPoints}
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
            PlayerState.isLoading ||
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
          disabled={PlayerState.isLoading || !PlayerState.remainingPoints}
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
            PlayerState.isLoading ||
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
            PlayerState.isLoading ||
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
            PlayerState.isLoading ||
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
            PlayerState.isLoading ||
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
