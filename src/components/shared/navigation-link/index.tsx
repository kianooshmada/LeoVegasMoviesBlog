import React, { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  children: ReactNode;
};

const NavigationLink = ({ href, children, ...props }: Props) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavigationLink;
