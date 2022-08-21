import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '../../elements/Typography';
import { avatarImgMap } from '../../helpers';
import { RootState } from '../../store/state';
import { ProgressBarTitle } from '../ProgressBarTitle';
import {
  Container,
  ProgressBarsContainer,
  AvatarContainerImg,
  AvatarImg,
  StatusPlayerContainer,
} from './styles';

export const PlayerStatus = () => {
  const PlayerState = useSelector((state: RootState) => state.PlayerState);

  return (
    <>
      <Container onPress={() => {}}>
        <AvatarContainerImg>
          <Typography
            text={`lvl: ${PlayerState?.level}`}
            textSize="paragraphy"
          />
          <AvatarImg source={avatarImgMap(PlayerState.playerType!)} />
        </AvatarContainerImg>
        <ProgressBarsContainer>
          <ProgressBarTitle
            title="life"
            currentValue={PlayerState.currentPlayerLifePoints}
            totalValue={PlayerState.playerLifePoints}
            progressColor="life"
          />
          <ProgressBarTitle
            title="xp"
            currentValue={PlayerState.playerXPPoints}
            totalValue={PlayerState.xpToNextLevel}
            progressColor="XP"
          />
          <StatusPlayerContainer>
            <Typography
              text={`pwr: ${PlayerState[PlayerState.playerType!].power}`}
              textSize="paragraphy"
            />
            <Typography
              text={`def: ${PlayerState[PlayerState.playerType!].defense}`}
              textSize="paragraphy"
            />
            <Typography
              text={`prec: ${PlayerState[PlayerState.playerType!].precision}`}
              textSize="paragraphy"
            />
            <Typography
              text={`int: ${PlayerState[PlayerState.playerType!].intelligence}`}
              textSize="paragraphy"
            />
          </StatusPlayerContainer>
        </ProgressBarsContainer>
      </Container>
    </>
  );
};
