import styled from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  bounces: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  padding: 0 ${normalizePixel(16)}px;
`;

export const RemainingContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
