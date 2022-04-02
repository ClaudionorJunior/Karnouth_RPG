import React from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import Typography, { TextSizes } from '../Typography';
import { ButtonContainer } from './styles';

interface Props extends PressableProps {
  text: string;
  textSize: TextSizes;
}

const Button = ({ text, textSize, ...rest }: Props) => {
  const { colors } = useTheme();
  return (
    <ButtonContainer {...rest}>
      <Typography textSize={textSize} text={text} color={colors.white} />
    </ButtonContainer>
  );
};

export default Button;
