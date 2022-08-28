import styled from 'styled-components/native';
import { TypographyProps, TextSizes } from '.';
import { normalizePixel } from '~/helpers';

const textSizeMap: {
  [key in TextSizes]: number;
} = {
  great: normalizePixel(35),
  medium: normalizePixel(22),
  small: normalizePixel(16),
  paragraphy: normalizePixel(12),
};

export const CustomText = styled.Text<Omit<TypographyProps, 'text'>>`
  font-family: 'Graduate_400Regular';
  font-size: ${({ textSize }) => textSizeMap[textSize]}px;
  color: ${({ color, theme }) => color || theme.colors.textColor};
`;
