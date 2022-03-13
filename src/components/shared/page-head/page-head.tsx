import React from 'react';
import NextHead from 'next/head';

type Props = {
  title: string;
  description?: string;
};

const PageHead = ({ title, description }: Props) => {
  const pageTitle = title + ' | LeoVegas Movies ';

  return (
    <NextHead>
      <title>{pageTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
    </NextHead>
  );
};

export default PageHead;
