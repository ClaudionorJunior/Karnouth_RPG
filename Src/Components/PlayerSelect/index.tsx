import React from 'react';
import { PressableProps } from 'react-native';
import { PlayerTypies } from '../../@types';
import { Container } from './styles';

interface PlayerSelectProps extends PressableProps {
  playerType: PlayerTypies;
}

const PlayerSelect = () => {
  return <Container />;
};

export default PlayerSelect;
