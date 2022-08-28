import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from './styles';

interface ButtonBattleProps {
  disabled?: boolean;
  onPress: () => void;
}

export const ButtonBattle = ({ disabled, onPress }: ButtonBattleProps) => (
  <Container disabled={!!disabled} onPress={onPress}>
    <MaterialCommunityIcons name="sword-cross" size={32} color="white" />
  </Container>
);
