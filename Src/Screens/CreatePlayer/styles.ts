import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  bounces: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  padding: 0 ${normalizePixel(16)}px;
`;
