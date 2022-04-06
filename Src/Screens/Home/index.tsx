import React from 'react';
import { useSelector } from 'react-redux';
import { avatarImgMap } from '../../Helpers';
import { RootState } from '../../Store/state';
import { Container, AvatarImg, AvatarContainerImg } from './styles';

const Home = () => {
  const playerState = useSelector((state: RootState) => state.playerState);

  return (
    <Container>
      <AvatarContainerImg>
        <AvatarImg source={avatarImgMap(playerState.playerType!)} />
      </AvatarContainerImg>
    </Container>
  );
};

export default Home;
