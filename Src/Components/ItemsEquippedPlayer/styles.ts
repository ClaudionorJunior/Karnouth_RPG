import styled from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const Container = styled.View`
  margin-top: ${normalizePixel(8)}px;
  margin-bottom: ${normalizePixel(8)}px;
  align-items: center;
`;

export const BodyContainer = styled.View`
  margin-bottom: ${normalizePixel(8)}px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const HandsContainer = styled.View`
  justify-content: space-evenly;
  width: 100%;
  flex-direction: row;
`;

export const SlotWithDescription = styled.View`
  align-items: center;
`;
