import React from 'react';
import { useSelector } from 'react-redux';
import { PlayerTypies } from '~/@types';
import { Typography } from '~/elements/Typography';
import { avatarImgMap } from '~/helpers';
import { RootState } from '~/store/state';
import {
  Container,
  AvatarContainer,
  AvatarTypeImg,
  StatusContainer,
} from './styles';

interface PlayerSelectProps {
  playerType: PlayerTypies;
  onPress: () => void;
}

export const PlayerSelect = ({ playerType, onPress }: PlayerSelectProps) => {
  const PlayerState = useSelector((state: RootState) => state.PlayerState);

  return (
    <Container
      onPress={onPress}
      isSelected={PlayerState.playerType === playerType}
    >
      <AvatarContainer>
        <Typography text={playerType} textSize="small" />
        <AvatarTypeImg source={avatarImgMap(playerType)} />
      </AvatarContainer>
      <StatusContainer>
        <AvatarContainer>
          <Typography text="Life" textSize="paragraphy" />
          <Typography
            text={PlayerState[playerType].life.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Power" textSize="paragraphy" />
          <Typography
            text={PlayerState[playerType].power.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Presicion" textSize="paragraphy" />
          <Typography
            text={PlayerState[playerType].precision.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Intelligence" textSize="paragraphy" />
          <Typography
            text={PlayerState[playerType].intelligence.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Typography text="Defence" textSize="paragraphy" />
          <Typography
            text={PlayerState[playerType].defense.toString()}
            textSize="paragraphy"
          />
        </AvatarContainer>
      </StatusContainer>
    </Container>
  );
};
