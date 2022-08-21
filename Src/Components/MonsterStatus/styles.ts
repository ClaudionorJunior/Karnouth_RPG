import styled, { css } from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const Container = styled.Pressable<{ isSelected: boolean }>`
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-top: ${normalizePixel(12)}px;
`;

export const ContainerStatus = styled.View<{ isSelected: boolean }>`
  width: 100%;
  flex-direction: row;
  border-width: ${normalizePixel(2)}px;
  border-color: transparent;
  border-radius: ${normalizePixel(6)}px;
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      border-color: ${theme.colors.green};
    `}
`;

export const ProgressBarsContainer = styled.View`
  width: 100%;
  margin-left: ${normalizePixel(8)}px;
`;

export const StatusMonsterContainer = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-evenly;
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
