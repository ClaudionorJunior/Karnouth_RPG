import React from 'react';
import { CloseButton } from '../../elements/CloseButton';
import { CloseButtonProps } from '../../elements/CloseButtonProps';
import { Container } from './styles';

export const CloseModalContainer = ({
  containerStyles,
  ...rest
}: CloseButtonProps) => {
  return (
    <Container>
      <CloseButton containerStyles={containerStyles} {...rest} />
    </Container>
  );
};
