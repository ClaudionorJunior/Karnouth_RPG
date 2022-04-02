import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.Pressable`
  margin-top: ${normalizePixel(16)}px;
  height: ${normalizePixel(100)}px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.borderColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${normalizePixel(8)}px;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AvatarTypeImg = styled.Image`
  width: ${normalizePixel(48)}px;
  height: ${normalizePixel(48)}px;
`;
