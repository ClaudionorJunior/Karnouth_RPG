import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PressableProps } from 'react-native';
import { Container } from './styles';

const ButtonBattle = ({ disabled, ...rest }: PressableProps) => {
  return (
    <Container disabled={!!disabled} {...rest}>
      <MaterialCommunityIcons name="sword-cross" size={32} color="white" />
    </Container>
  );
};

export default ButtonBattle;
