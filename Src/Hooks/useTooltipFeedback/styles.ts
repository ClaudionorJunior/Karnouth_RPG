import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  position: absolute;
  z-index: 99;
  top: ${normalizePixel(80)}px;
  left: 0;
  height: ${normalizePixel(64)}px;
  width: ${normalizePixel(280)}px;
  background-color: ${({ theme }) => theme.colors.warning};
  border-top-right-radius: ${normalizePixel(10)}px;
  border-bottom-right-radius: ${normalizePixel(10)}px;
  padding: ${normalizePixel(8)}px;
  align-items: center;
  justify-content: center;
`;
