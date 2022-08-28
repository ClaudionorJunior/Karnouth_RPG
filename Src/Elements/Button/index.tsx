import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Typography, TextSizes } from '../Typography';
import { ButtonContainer } from './styles';

interface Props {
  text: string;
  textSize: TextSizes;
  disabled?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ({
  text,
  textSize,
  containerStyles,
  disabled = false,
  ...rest
}: Props) => {
  const { colors } = useTheme();
  return (
    <ButtonContainer disabled={disabled} style={containerStyles} {...rest}>
      <Typography textSize={textSize} text={text} color={colors.white} />
    </ButtonContainer>
  );
};
