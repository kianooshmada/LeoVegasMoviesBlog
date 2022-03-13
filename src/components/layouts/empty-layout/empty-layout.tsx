import React, { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const EmptyLayout = ({ children }: MainLayoutProps) => {
  return <div>{children}</div>;
};

export default EmptyLayout;
