import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  height: ${normalizePixel(35)}%;
  margin-top: ${normalizePixel(8)}px;
  margin-bottom: ${normalizePixel(8)}px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const XContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: ${normalizePixel(48)}%;
`;
