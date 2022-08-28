import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

import { CustomText } from './styles';

export type TextSizes = 'paragraphy' | 'small' | 'medium' | 'great';

export interface TypographyProps extends TextProps {
  textSize: TextSizes;
  text: string;
  color?: string;
  containerStyles?: StyleProp<TextStyle>;
}

export const Typography = ({
  textSize,
  text,
  color,
  containerStyles,
  ...rest
}: TypographyProps) => (
  <CustomText
    {...rest}
    style={containerStyles}
    textSize={textSize}
    color={color}
  >
    {text}
  </CustomText>
);
