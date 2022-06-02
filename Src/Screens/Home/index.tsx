import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Inventory,
  ItemsEquippedPlayer,
  LoadingScreen,
  ProgressBarTitle,
} from '../../Components';
import { LineWrapper, Typography } from '../../Elements';
import { avatarImgMap, selectItemById } from '../../Helpers';
import { PlayerManagerItemsActions } from '../../Store/PlayerManagerItemsSlice';
import { RootState } from '../../Store/state';
import {
  Container,
  AvatarImg,
  AvatarContainerImg,
  Header,
  ProgressBarsContainer,
  StatusPlayerContainer,
} from './styles';

const Home = () => {
  const playerState = useSelector((state: RootState) => state.playerState);
  const disp = useDispatch();
  // disp(PlayerManagerItemsActions.addPlayerInventoryItem(selectItemById(1008)));
  // disp(PlayerManagerItemsActions.resetAllItems());
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
      <LineWrapper />
      <ItemsEquippedPlayer />
      <LineWrapper />
      <Inventory />
    </Container>
  );
};

export default Home;
