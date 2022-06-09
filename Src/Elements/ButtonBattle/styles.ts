import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

interface ContainerProps {
  disabled: boolean;
}

export const Container = styled.Pressable<ContainerProps>`
  height: ${normalizePixel(54)}px;
  width: ${normalizePixel(100)}px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral : theme.colors.btnBattle};
  justify-content: center;
  align-items: center;
  border-radius: ${normalizePixel(6)}px;
`;
