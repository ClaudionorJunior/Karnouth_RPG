import styled from 'styled-components/native';
import { normalizePixel } from '~/Helpers';

interface Props {
  size: 'small' | 'medium' | 'great';
  color: string | undefined;
}

export const CustomText = styled.Text<Props>`
  font-family: 'Graduate_400Regular';
  font-size: ${({ size }) =>
    size === 'small'
      ? normalizePixel(18)
      : size === 'medium'
      ? normalizePixel(22)
      : normalizePixel(35)}px;
  color: ${({ color, theme }) =>
    color !== undefined ? color : theme.colors.textColor};
`;
