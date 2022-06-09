/* eslint-disable react/destructuring-assignment */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MonsterStatus as MonsterStatusType } from '../../@types';
import { Typography } from '../../Elements';
import { MonsterStatusActions } from '../../Store/MonsterStatusSlice';
import { RootState } from '../../Store/state';
import ProgressBarTitle from '../ProgressBarTitle';
import {
  ContainerStatus,
  ProgressBarsContainer,
  AvatarContainerImg,
  AvatarImg,
  StatusMonsterContainer,
  Container,
} from './styles';

interface MonsterStatusProps {
  monsterToRender?: MonsterStatusType;
  showModalMonsters?: () => void;
}

const MonsterStatus = ({
  monsterToRender,
  showModalMonsters,
}: MonsterStatusProps) => {
  const monsterState = useSelector((state: RootState) => state.MonsterState);
  const dispatch = useDispatch();

  const handleSelected = useCallback(() => {
    if (monsterToRender) {
      dispatch(MonsterStatusActions.addMonter(monsterToRender));
    }
    if (showModalMonsters) {
      showModalMonsters();
    }
  }, [monsterToRender]);

  return (
    <Container
      onPress={handleSelected}
      isSelected={monsterState?.Monster?.name === monsterToRender?.name}
    >
      <Typography
        text={monsterToRender?.name || monsterState?.Monster?.name || 'monster'}
        textSize="small"
      />
      <ContainerStatus
        isSelected={monsterState?.Monster?.name === monsterToRender?.name}
      >
        <AvatarContainerImg>
          <AvatarImg
            source={monsterToRender?.source || monsterState.Monster?.source}
          />
        </AvatarContainerImg>
        <ProgressBarsContainer>
          <ProgressBarTitle
            title="life"
            currentValue={
              monsterToRender?.life ||
              monsterState.currentMonsterLifePoints ||
              0
            }
            totalValue={
              monsterToRender?.life || monsterState.monsterLifePoints || 10
            }
            progressColor="life"
          />
          <StatusMonsterContainer>
            <Typography
              text={`pwr: ${
                monsterToRender?.power || monsterState.Monster?.power || 0
              }`}
              textSize="paragraphy"
            />
            <Typography
              text={`def: ${
                monsterToRender?.defense || monsterState.Monster?.defense || 0
              }`}
              textSize="paragraphy"
            />
            <Typography
              text={`xp: ${
                monsterToRender?.xp || monsterState.Monster?.xp || 0
              }`}
              textSize="paragraphy"
            />
          </StatusMonsterContainer>
        </ProgressBarsContainer>
      </ContainerStatus>
    </Container>
  );
};

export default MonsterStatus;
