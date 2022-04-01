import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

export const palletColors = {
  colors: {
    borderColor: '#9ea3a1',
    textColor: '#403E3E',
    goldCoin: '#ffd700',
    Red: '#CC1F1F',
    Blue: '#5185C1',
    Green: '#60AE31',
    SlotBGColor: '#e6e6e6',
    CardBGColor: '#D1D1D1',
    BackgroudColor: '#E5E5E5',
  },
};

export type Colors = typeof palletColors;

const ContextProvider: React.FC = ({ children }) => {
  const [colors] = useState<Colors>(palletColors);
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
};

export default ContextProvider;
