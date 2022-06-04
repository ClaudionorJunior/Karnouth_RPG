import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
  Inventory,
  ItemsEquippedPlayer,
  LoadingScreen,
  ProgressBarTitle,
} from '../../Components';
import { LineWrapper, Typography } from '../../Elements';
import { avatarImgMap } from '../../Helpers';
import { RootState } from '../../Store/state';
import {
  Container,
  AvatarImg,
  AvatarContainerImg,
  Header,
  ProgressBarsContainer,
  StatusPlayerContainer,
} from './styles';
import { useAutoRegerateLife } from '../../Hooks';

const Home = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const { restoreLife } = useAutoRegerateLife();

  useFocusEffect(
    useCallback(() => {
      if (playerState.currentPlayerLifePoints < playerState.playerLifePoints) {
        restoreLife();
      }
    }, [playerState.currentPlayerLifePoints]),
  );

  if (!playerState) {
    return <LoadingScreen />;
  }

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
              text={`Def: ${playerState[playerState.playerType!].defense}`}
              textSize="paragraphy"
            />
            <Typography
              text={`Prec: ${playerState[playerState.playerType!].precision}`}
              textSize="paragraphy"
            />
            <Typography
              text={`Int: ${playerState[playerState.playerType!].intelligence}`}
              textSize="paragraphy"
            />
          </StatusPlayerContainer>
        </ProgressBarsContainer>
      </Header>
      <LineWrapper />
      <ItemsEquippedPlayer />
      <LineWrapper />
      <Inventory />
    </Container>
  );
};

export default Home;
