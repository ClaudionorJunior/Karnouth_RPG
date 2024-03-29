import styled from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const Container = styled.Pressable`
  height: ${normalizePixel(44)}px;
  width: ${normalizePixel(44)}px;
  align-items: center;
  justify-content: center;
`;
