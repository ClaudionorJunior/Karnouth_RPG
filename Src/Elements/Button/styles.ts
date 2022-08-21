import styled from 'styled-components/native';
import { normalizePixel } from '../../helpers';

interface ButtonContainerProps {
  disabled: boolean;
}

export const ButtonContainer = styled.Pressable<ButtonContainerProps>`
  height: ${normalizePixel(40)}px;
  width: 80%;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral : theme.colors.primary1};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
