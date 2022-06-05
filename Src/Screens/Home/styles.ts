import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  padding: ${normalizePixel(12)}px;
  padding-bottom: 0;
`;
