import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { PressableProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';
import { normalizePixel } from '../../Helpers';

interface ButtonPutOrTakeOffProps extends PressableProps {
  name: 'minuscircle' | 'pluscircle';
  disabled?: boolean;
}

const ButtonPutOrTakeOff = ({
  name,
  disabled,
  ...rest
}: ButtonPutOrTakeOffProps) => {
  const { colors } = useTheme();
  return (
    <Container disabled={!!disabled} {...rest}>
      <AntDesign
        name={name}
        color={disabled ? colors.borderColor : colors.primary1}
        size={normalizePixel(24)}
      />
    </Container>
  );
};

export default ButtonPutOrTakeOff;
