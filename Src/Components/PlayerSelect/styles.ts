import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.Pressable<ContainerProps>`
  margin-top: ${normalizePixel(16)}px;
  width: 100%;
  height: ${normalizePixel(96)}px;
  border: 2px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary1 : theme.colors.borderColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${normalizePixel(8)}px;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: ${normalizePixel(4)}px;
`;

export const AvatarTypeImg = styled.Image`
  width: ${normalizePixel(48)}px;
  height: ${normalizePixel(48)}px;
`;

export const StatusContainer = styled.View`
  flex-wrap: wrap;
`;
