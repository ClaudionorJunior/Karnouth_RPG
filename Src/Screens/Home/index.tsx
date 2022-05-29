import React from 'react';
import { useSelector } from 'react-redux';
import { ProgressBarTitle, Slotitem } from '../../Components';
import { Typography } from '../../Elements';
import { avatarImgMap } from '../../Helpers';
import { RootState } from '../../Store/state';
import {
  Container,
  AvatarImg,
  AvatarContainerImg,
  Header,
  ProgressBarsContainer,
  StatusPlayerContainer,
  HeaderLineWrapper,
} from './styles';

const Home = () => {
  const playerState = useSelector((state: RootState) => state.playerState);

  return (
    <Container>
      <Header>
        <AvatarContainerImg>
          <AvatarImg source={avatarImgMap(playerState.playerType!)} />
        </AvatarContainerImg>
        <ProgressBarsContainer>
          <ProgressBarTitle
            title="Life"
            currentValue={playerState.currentPlayerLifePoints}
            totalValue={playerState.playerLifePoints}
            progressColor="life"
          />
          <ProgressBarTitle
            title="XP"
            currentValue={playerState.playerXPPoints}
            totalValue={playerState.xpToNextLevel}
            progressColor="XP"
          />
          <StatusPlayerContainer>
            <Typography
              text={`Pwr: ${playerState[playerState.playerType!].power}`}
              textSize="paragraphy"
            />
            <Typography
              text={`Def: ${playerState[playerState.playerType!].defence}`}
              textSize="paragraphy"
            />
            <Typography
              text={`Prec: ${playerState[playerState.playerType!].presicion}`}
              textSize="paragraphy"
            />
            <Typography
              text={`Int: ${playerState[playerState.playerType!].intelligence}`}
              textSize="paragraphy"
            />
          </StatusPlayerContainer>
        </ProgressBarsContainer>
      </Header>
      <HeaderLineWrapper />
      <Slotitem />
    </Container>
  );
};

export default Home;
