import React from 'react';

import { CustomText } from './styles';

interface Props {
  size: 'small' | 'medium' | 'great';
  text: string;
  color?: string;
}

const Typography: React.FC<Props> = ({ size, text, color }) => {
  return (
    <CustomText size={size} color={color}>
      {text}
    </CustomText>
  );
};

export default Typography;
