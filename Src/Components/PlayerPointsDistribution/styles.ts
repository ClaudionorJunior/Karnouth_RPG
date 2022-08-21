import styled from 'styled-components/native';
import { normalizePixel } from '../../helpers';

export const Container = styled.View`
  width: 100%;
`;

export const SelectableContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const StatusName = styled.View`
  align-items: center;
  width: ${normalizePixel(150)}px;
`;

export const StatusQuantity = styled.View`
  align-items: center;
  width: ${normalizePixel(70)}px;
`;
