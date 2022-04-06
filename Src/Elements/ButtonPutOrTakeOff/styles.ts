import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.Pressable`
  width: ${normalizePixel(28)}px;
  height: ${normalizePixel(28)}px;
  justify-content: center;
  align-items: center;
`;
