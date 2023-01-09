import React from 'react';
import { Container } from './styles';

export type FooterPrpos = {
  children: string;
};

export const Footer = ({ children }: FooterPrpos) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
