import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.Pressable`
  margin-top: ${normalizePixel(16)}px;
  height: ${normalizePixel(100)}px;
  border: 1px;
`;
