import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Colors } from '~/@types';
import { palletColors } from '~/styles';
import { ModalItemDetailProvider } from './useModalItemDetail';
import { TooltipFeedbackProvider } from './useTooltipFeedback';

const ContextProvider: React.FC = ({ children }) => {
  const [colors] = useState<Colors>(palletColors);
  return (
    <ThemeProvider theme={colors}>
      <TooltipFeedbackProvider>
        <ModalItemDetailProvider>{children}</ModalItemDetailProvider>
      </TooltipFeedbackProvider>
    </ThemeProvider>
  );
};

export default ContextProvider;
