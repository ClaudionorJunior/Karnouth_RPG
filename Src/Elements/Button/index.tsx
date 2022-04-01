import React from 'react';
import { TouchableOpacity } from 'react-native';

import Typography from '../Typography';

interface Props {
  text: string;
  textSize: 'small' | 'medium' | 'great';
  onPress: () => void;
}

const Button: React.FC<Props> = ({ text, textSize, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography size={textSize} text={text} />
    </TouchableOpacity>
  );
};

export default Button;
