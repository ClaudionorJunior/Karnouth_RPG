import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${normalizePixel(12)}px;
`;

export const ContainerStatus = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${normalizePixel(90)}px;
`;

export const ProgressBarsContainer = styled.View`
  width: 100%;
  margin-left: ${normalizePixel(8)}px;
`;

export const StatusMonsterContainer = styled.View`
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
