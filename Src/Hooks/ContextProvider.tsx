import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Colors } from '../@types';
import { palletColors } from '../Styles';

const ContextProvider: React.FC = ({ children }) => {
  const [colors] = useState<Colors>(palletColors);
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
};

export default ContextProvider;
