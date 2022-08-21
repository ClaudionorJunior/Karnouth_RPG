import styled from 'styled-components/native';
import { normalizePixel } from '../../helpers';

export const Container = styled.Pressable`
  width: ${normalizePixel(56)}px;
  height: ${normalizePixel(56)}px;
  background-color: ${({ theme }) => theme.colors.slotBGColor};
  border-width: ${normalizePixel(4)}px;
  border-color: ${({ theme }) => theme.colors.secondary1};
  border-radius: ${normalizePixel(6)}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${normalizePixel(48)}px;
  height: ${normalizePixel(48)}px;
`;
