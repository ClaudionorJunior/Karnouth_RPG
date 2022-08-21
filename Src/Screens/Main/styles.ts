import styled from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  padding-bottom: ${normalizePixel(32)}px;
`;

export const MainImage = styled.Image`
  width: 100%;
  height: 60%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;
