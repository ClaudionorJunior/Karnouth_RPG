import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary3};
  padding: ${normalizePixel(16)}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ProgressBarsContainer = styled.View`
  width: 100%;
  margin-left: ${normalizePixel(8)}px;
`;

export const StatusPlayerContainer = styled.View`
  width: 100%;
`;

export const AvatarImg = styled.Image`
  width: ${normalizePixel(48)}px;
  height: ${normalizePixel(48)}px;
`;

export const AvatarContainerImg = styled.View`
  align-self: baseline;
  justify-content: center;
  align-items: center;
  border-width: ${normalizePixel(5)}px;
  border-color: ${({ theme }) => theme.colors.secondary2};
  border-radius: ${normalizePixel(6)}px;
`;
