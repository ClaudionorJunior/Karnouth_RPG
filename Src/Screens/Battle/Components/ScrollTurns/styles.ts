import styled from 'styled-components/native';
import { normalizePixel } from '../../../../helpers';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: ${normalizePixel(16)}px;
  margin-bottom: ${normalizePixel(16)}px;
`;

export const Scroll = styled.ScrollView.attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
})`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.cardBGColor};
  border-width: ${normalizePixel(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${normalizePixel(16)}px;
  padding: ${normalizePixel(12)}px;
`;
