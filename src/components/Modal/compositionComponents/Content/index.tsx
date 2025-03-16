import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

export type TContent = HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Content: React.FC<TContent> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Content;
