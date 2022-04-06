import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

interface ButtonContainerProps {
  disabled: boolean;
}

export const ButtonContainer = styled.Pressable<ButtonContainerProps>`
  height: ${normalizePixel(40)}px;
  width: 80%;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.borderColor : theme.colors.primary1};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
