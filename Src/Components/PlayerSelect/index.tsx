import React from 'react';
import { PressableProps } from 'react-native';
import { useSelector } from 'react-redux';
import { PlayerTypies } from '../../@types';
import { Typography } from '../../Elements';
import { avatarImgMap } from '../../Helpers';
import { RootState } from '../../Store/state';
import {
  Container,
  AvatarContainer,
  AvatarTypeImg,
  StatusContainer,
} from './styles';

interface PlayerSelectProps extends PressableProps {
  playerType: PlayerTypies;
}

const PlayerSelect = ({ playerType, ...rest }: PlayerSelectProps) => {
  const playerState = useSelector((state: RootState) => state.playerState);

  return (
    <Container isSelected={playerState.playerType === playerType} {...rest}>
      <AvatarContainer>
        <Typography text={playerType} textSize="small" />
        <AvatarTypeImg source={avatarImgMap(playerType)} />
      </AvatarContainer>
      <StatusContainer>
        <AvatarContainer>
          <Typography text="Life" textSize="paragraphy" />
          <Typography
            text={playerState[playerType].life.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Power" textSize="paragraphy" />
          <Typography
            text={playerState[playerType].power.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Presicion" textSize="paragraphy" />
          <Typography
            text={playerState[playerType].precision.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Intelligence" textSize="paragraphy" />
          <Typography
            text={playerState[playerType].intelligence.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Defence" textSize="paragraphy" />
          <Typography
            text={playerState[playerType].defense.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
      </StatusContainer>
    </Container>
  );
};

export default PlayerSelect;
