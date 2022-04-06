import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerStatus } from '../../@types';
import { ButtonPutOrTakeOff, Typography } from '../../Elements';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';
import { RootState } from '../../Store/state';
import {
  Container,
  SelectableContainer,
  StatusName,
  StatusQuantity,
} from './styles';

interface StatusDistribution {
  calc?: 'add' | 'take off';
  playerStatus: PlayerStatus;
}

interface PlayerPointsDistributionProps {
  onReturnDistribution: (points: PlayerStatus) => void;
}

const PlayerPointsDistribution = ({
  onReturnDistribution,
}: PlayerPointsDistributionProps) => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialDistributionState, setInitialDistributionState] =
    useState<PlayerStatus>();
  const [distributionState, setDistributionState] =
    useState<StatusDistribution>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (playerState.playerType) {
      setInitialDistributionState(playerState[playerState.playerType]);
    }
    handleChangePoints();
  }, [playerState.playerType]);

  useEffect(() => {
    if (!playerState.remainingPoints && distributionState?.playerStatus) {
      onReturnDistribution(distributionState?.playerStatus);
    }
  }, [playerState.remainingPoints, distributionState?.playerStatus]);

  const handleChangePoints = useCallback(
    (status?: StatusDistribution) => {
      if (status?.calc === 'take off') {
        dispatch(PlayerStatusActions.addRemainingPoints());
      }

      if (status?.calc === 'add') {
        dispatch(PlayerStatusActions.takeOffRemainingPoints());
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 300);

      switch (playerState.playerType) {
        case 'Mage':
          setDistributionState({
            playerStatus: status?.playerStatus || playerState.Mage,
          });
          break;
        case 'Warrior':
          setDistributionState({
            playerStatus: status?.playerStatus || playerState.Warrior,
          });
          break;
        default:
          setDistributionState({
            playerStatus: status?.playerStatus || playerState.Ranger,
          });
          break;
      }
    },
    [playerState.playerType, playerState.remainingPoints],
  );

  const addLife = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'add',
      playerStatus: {
        ...distributionState!.playerStatus,
        life: distributionState!.playerStatus.life + 1,
      },
    });
  }, [distributionState?.playerStatus, distributionState?.playerStatus.life]);

  const takeOffLife = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'take off',
      playerStatus: {
        ...distributionState!.playerStatus,
        life: distributionState!.playerStatus.life - 1,
      },
    });
  }, [distributionState?.playerStatus, distributionState?.playerStatus.life]);

  const addPresicion = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'add',
      playerStatus: {
        ...distributionState!.playerStatus,
        presicion: distributionState!.playerStatus.presicion + 1,
      },
    });
  }, [
    distributionState?.playerStatus,
    distributionState?.playerStatus.presicion,
  ]);

  const takeOffpresicion = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'take off',
      playerStatus: {
        ...distributionState!.playerStatus,
        presicion: distributionState!.playerStatus.presicion - 1,
      },
    });
  }, [
    distributionState?.playerStatus,
    distributionState?.playerStatus.presicion,
  ]);

  const addDefense = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'add',
      playerStatus: {
        ...distributionState!.playerStatus,
        defence: distributionState!.playerStatus.defence + 1,
      },
    });
  }, [
    distributionState?.playerStatus,
    distributionState?.playerStatus.defence,
  ]);

  const takeOffDefense = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'take off',
      playerStatus: {
        ...distributionState!.playerStatus,
        defence: distributionState!.playerStatus.defence - 1,
      },
    });
  }, [
    distributionState?.playerStatus,
    distributionState?.playerStatus.defence,
  ]);

  const addPower = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'add',
      playerStatus: {
        ...distributionState!.playerStatus,
        power: distributionState!.playerStatus.power + 1,
      },
    });
  }, [distributionState?.playerStatus, distributionState?.playerStatus.power]);

  const takeOffPower = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'take off',
      playerStatus: {
        ...distributionState!.playerStatus,
        power: distributionState!.playerStatus.power - 1,
      },
    });
  }, [distributionState?.playerStatus, distributionState?.playerStatus.power]);

  const addIntelligence = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'add',
      playerStatus: {
        ...distributionState!.playerStatus,
        intelligence: distributionState!.playerStatus.intelligence + 1,
      },
    });
  }, [
    distributionState?.playerStatus,
    distributionState?.playerStatus.intelligence,
  ]);

  const takeOffIntelligence = useCallback(() => {
    setIsLoading(true);
    handleChangePoints({
      calc: 'take off',
      playerStatus: {
        ...distributionState!.playerStatus,
        intelligence: distributionState!.playerStatus.intelligence - 1,
      },
    });
  }, [
    distributionState?.playerStatus,
    distributionState?.playerStatus.intelligence,
  ]);

  if (!playerState.playerType || !distributionState) {
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
            isLoading ||
            initialDistributionState?.life ===
              distributionState.playerStatus.life
          }
          onPress={takeOffLife}
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={distributionState?.playerStatus.life.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={addLife}
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Precision" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            initialDistributionState?.presicion ===
              distributionState.playerStatus.presicion
          }
          onPress={takeOffpresicion}
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={distributionState?.playerStatus.presicion.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={addPresicion}
          name="pluscircle"
        />
      </SelectableContainer>
      <SelectableContainer>
        <StatusName>
          <Typography text="Defence" textSize="small" />
        </StatusName>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            initialDistributionState?.defence ===
              distributionState.playerStatus.defence
          }
          onPress={takeOffDefense}
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={distributionState?.playerStatus.defence.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={isLoading || !playerState.remainingPoints}
          onPress={addDefense}
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
            initialDistributionState?.power ===
              distributionState.playerStatus.power
          }
          onPress={takeOffPower}
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={distributionState?.playerStatus.power.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            !playerState.remainingPoints ||
            distributionState.playerStatus.power === 0
          }
          onPress={addPower}
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
            initialDistributionState?.intelligence ===
              distributionState.playerStatus.intelligence
          }
          onPress={takeOffIntelligence}
          name="minuscircle"
        />
        <StatusQuantity>
          <Typography
            text={distributionState?.playerStatus.intelligence.toString() || ''}
            textSize="small"
          />
        </StatusQuantity>
        <ButtonPutOrTakeOff
          disabled={
            isLoading ||
            !playerState.remainingPoints ||
            distributionState.playerStatus.intelligence === 0
          }
          onPress={addIntelligence}
          name="pluscircle"
        />
      </SelectableContainer>
    </Container>
  );
};

export default PlayerPointsDistribution;
