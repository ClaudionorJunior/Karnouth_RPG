import React from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Typography } from '../Typography';
import { Container } from './styles';

interface GhostButtonProps extends PressableProps {
  text: string;
  disabled?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
}

export const GhostButton = ({
  text,
  disabled,
  containerStyles,
  ...rest
}: GhostButtonProps) => {
  const { colors } = useTheme();
  return (
    <Container style={containerStyles} disabled={disabled} {...rest}>
      <Typography
        textSize="paragraphy"
        text={text}
        color={disabled ? colors.neutral : colors.primary1}
      />
    </Container>
  );
};
