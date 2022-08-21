import styled from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const Container = styled.Pressable`
  width: ${normalizePixel(28)}px;
  height: ${normalizePixel(28)}px;
  justify-content: center;
  align-items: center;
`;
