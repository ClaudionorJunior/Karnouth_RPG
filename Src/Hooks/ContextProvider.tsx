import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Colors } from '../@types';
import { palletColors } from '../Styles';
import { ModalItemDetailProvider } from './useModalItemDetail';

const ContextProvider: React.FC = ({ children }) => {
  const [colors] = useState<Colors>(palletColors);
  return (
    <ThemeProvider theme={colors}>
      <ModalItemDetailProvider>{children}</ModalItemDetailProvider>
    </ThemeProvider>
  );
};

export default ContextProvider;
