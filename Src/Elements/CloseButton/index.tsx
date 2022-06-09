import React from 'react';
import { PressableProps, StyleProp } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from './styles';
import { normalizePixel } from '../../Helpers';

export interface CloseButtonProps extends PressableProps {
  containerStyles?: StyleProp<any>;
}

const CloseButton = ({ containerStyles, ...rest }: CloseButtonProps) => {
  return (
    <Container style={containerStyles} {...rest}>
      <MaterialCommunityIcons
        name="close-thick"
        size={normalizePixel(32)}
        color="black"
      />
    </Container>
  );
};

export default CloseButton;
