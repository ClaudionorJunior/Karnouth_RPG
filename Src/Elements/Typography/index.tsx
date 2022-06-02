import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { CustomText } from './styles';

export type TextSizes = 'paragraphy' | 'small' | 'medium' | 'great';

export interface TypographyProps {
  textSize: TextSizes;
  text: string;
  color?: string;
  containerStyles?: StyleProp<TextStyle>;
}

const Typography = ({
  textSize,
  text,
  color,
  containerStyles,
}: TypographyProps) => {
  console.log('text', text);
  return (
    <CustomText style={containerStyles} textSize={textSize} color={color}>
      {text}
    </CustomText>
  );
};

export default Typography;
