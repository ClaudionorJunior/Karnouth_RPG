import React from 'react';
import { useSelector } from 'react-redux';
import { ProgressBarTitle } from '../../Components';
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

const Home = () => {
  const playerState = useSelector((state: RootState) => state.playerState);

  return (
    <Container>
      <Header>
        <AvatarContainerImg>
          <AvatarImg source={avatarImgMap(playerState.playerType!)} />
        </AvatarContainerImg>
        <ProgressBarsContainer>
          {/* As barras de status de life e exp */}
          <ProgressBarTitle
            title="Life"
            currentValue={playerState.currentPlayerLifePoints}
            totalValue={playerState.playerLifePoints}
            progressColor="life"
          />
          <ProgressBarTitle
            title="XP"
            currentValue={20}
            totalValue={100}
            progressColor="XP"
          />
          <StatusPlayerContainer>
            {/* As infos de status de life e pwr, int, prec, def */}
          </StatusPlayerContainer>
        </ProgressBarsContainer>
      </Header>
    </Container>
  );
};

export default Home;
