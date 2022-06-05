import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '../../Elements';
import { RootState } from '../../Store/state';
import ProgressBarTitle from '../ProgressBarTitle';
import {
  Container,
  ProgressBarsContainer,
  AvatarContainerImg,
  AvatarImg,
  StatusMonsterContainer,
} from './styles';

const MonsterStatus = () => {
  const monsterState = useSelector((state: RootState) => state.MonsterState);

  return (
    <Container>
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
    </Container>
  );
};

export default MonsterStatus;
