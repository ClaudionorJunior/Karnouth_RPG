import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '../../Elements';
import { avatarImgMap } from '../../Helpers';
import { RootState } from '../../Store/state';
import ProgressBarTitle from '../ProgressBarTitle';
import {
  Container,
  ProgressBarsContainer,
  AvatarContainerImg,
  AvatarImg,
  StatusPlayerContainer,
} from './styles';

const PlayerStatus = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  return (
    <>
      <Container onPress={() => {}}>
        <AvatarContainerImg>
          <Typography
            text={`lvl: ${playerState?.level}`}
            textSize="paragraphy"
          />
          <AvatarImg source={avatarImgMap(playerState.playerType!)} />
        </AvatarContainerImg>
        <ProgressBarsContainer>
          <ProgressBarTitle
            title="life"
            currentValue={playerState.currentPlayerLifePoints}
            totalValue={playerState.playerLifePoints}
            progressColor="life"
          />
          <ProgressBarTitle
            title="xp"
            currentValue={playerState.playerXPPoints}
            totalValue={playerState.xpToNextLevel}
            progressColor="XP"
          />
          <StatusPlayerContainer>
            <Typography
              text={`pwr: ${playerState[playerState.playerType!].power}`}
              textSize="paragraphy"
            />
            <Typography
              text={`def: ${playerState[playerState.playerType!].defense}`}
              textSize="paragraphy"
            />
            <Typography
              text={`prec: ${playerState[playerState.playerType!].precision}`}
              textSize="paragraphy"
            />
            <Typography
              text={`int: ${playerState[playerState.playerType!].intelligence}`}
              textSize="paragraphy"
            />
          </StatusPlayerContainer>
        </ProgressBarsContainer>
      </Container>
      {!playerState?.remainingPoints && (
        <Typography
          text="you have points to distribute"
          textSize="paragraphy"
        />
      )}
    </>
  );
};

export default PlayerStatus;
