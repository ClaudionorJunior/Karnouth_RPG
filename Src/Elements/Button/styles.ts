import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const ButtonContainer = styled.Pressable`
  height: ${normalizePixel(40)}px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
