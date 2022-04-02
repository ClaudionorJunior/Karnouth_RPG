import React, { useMemo } from 'react';
import { PressableProps } from 'react-native';
import { PlayerTypies } from '../../@types';
import { Ranger, Mage, Warrior } from '../../Assets';
import { Typography } from '../../Elements';
import { Container, AvatarContainer, AvatarTypeImg } from './styles';

interface PlayerSelectProps extends PressableProps {
  playerType: PlayerTypies;
}

const PlayerSelect = ({ playerType, ...rest }: PlayerSelectProps) => {
  const avatarImgMap = useMemo(() => {
    switch (playerType) {
      case 'Mage':
        return Mage;
      case 'Warrior':
        return Warrior;
      default:
        return Ranger;
    }
  }, []);

  return (
    <Container {...rest}>
      <AvatarContainer>
        <Typography text={playerType} textSize="small" />
        <AvatarTypeImg source={avatarImgMap} />
      </AvatarContainer>
      <AvatarContainer>
        <Typography text="Life" textSize="paragraphy" />
        <Typography text="10" textSize="paragraphy" />
      </AvatarContainer>
      <AvatarContainer>
        <Typography text="Power" textSize="paragraphy" />
        <Typography text="10" textSize="paragraphy" />
      </AvatarContainer>
      <AvatarContainer>
        <Typography text="Presicion" textSize="paragraphy" />
        <Typography text="10" textSize="paragraphy" />
      </AvatarContainer>
      <AvatarContainer>
        <Typography text="Intelligence" textSize="paragraphy" />
        <Typography text="10" textSize="paragraphy" />
      </AvatarContainer>
    </Container>
  );
};

export default PlayerSelect;
