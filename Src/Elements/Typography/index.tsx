import React from 'react';

import { CustomText } from './styles';

export type TextSizes = 'paragraphy' | 'small' | 'medium' | 'great';

export interface TypographyProps {
  textSize: TextSizes;
  text: string;
  color?: string;
}

const Typography = ({ textSize, text, color }: TypographyProps) => {
  return (
    <CustomText textSize={textSize} color={color}>
      {text}
    </CustomText>
  );
};

export default Typography;
