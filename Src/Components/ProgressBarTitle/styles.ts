import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View``;

export const LevelBar = styled.View`
  height: ${normalizePixel(8)}px;
  width: 150px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral};
  margin-right: ${normalizePixel(8)}px;
  overflow: hidden;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
