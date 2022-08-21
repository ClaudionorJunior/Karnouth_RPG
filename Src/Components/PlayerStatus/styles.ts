import styled from 'styled-components/native';
import { normalizePixel } from '../../helpers';

export const Container = styled.Pressable`
  flex-direction: row;
  height: ${normalizePixel(90)}px;
`;

export const ProgressBarsContainer = styled.View`
  width: 100%;
  margin-left: ${normalizePixel(8)}px;
`;

export const StatusPlayerContainer = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
`;

export const AvatarImg = styled.Image`
  width: ${normalizePixel(48)}px;
  height: ${normalizePixel(48)}px;
`;

export const AvatarContainerImg = styled.View`
  align-self: baseline;
  justify-content: center;
  align-items: center;
  border-width: ${normalizePixel(4)}px;
  border-color: ${({ theme }) => theme.colors.secondary1};
  border-radius: ${normalizePixel(6)}px;
`;
