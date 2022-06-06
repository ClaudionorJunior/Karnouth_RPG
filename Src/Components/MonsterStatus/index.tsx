import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '../../Elements';
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

const MonsterStatus = () => {
  const monsterState = useSelector((state: RootState) => state.MonsterState);

  return (
    <Container>
      <Typography
        text={monsterState?.Monster?.name || 'monster'}
        textSize="small"
      />
      <ContainerStatus>
        <AvatarContainerImg>
          <AvatarImg source={monsterState.Monster?.source} />
        </AvatarContainerImg>
        <ProgressBarsContainer>
          <ProgressBarTitle
            title="life"
            currentValue={monsterState.currentMonsterLifePoints || 0}
            totalValue={monsterState.monsterLifePoints || 10}
            progressColor="life"
          />
          <StatusMonsterContainer>
            <Typography
              text={`pwr: ${monsterState.Monster?.power || 0}`}
              textSize="paragraphy"
            />
            <Typography
              text={`def: ${monsterState.Monster?.defense || 0}`}
              textSize="paragraphy"
            />
            <Typography
              text={`xp: ${monsterState.Monster?.xp || 0}`}
              textSize="paragraphy"
            />
          </StatusMonsterContainer>
        </ProgressBarsContainer>
      </ContainerStatus>
    </Container>
  );
};

export default MonsterStatus;
