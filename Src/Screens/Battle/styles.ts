import styled from 'styled-components/native';
import { normalizePixel } from '../../helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  padding: ${normalizePixel(12)}px;
  padding-bottom: 0;
`;

export const ContainerBtnBattle = styled.View`
  width: 100%;
  align-items: center;
  height: ${normalizePixel(96)}px;
`;
