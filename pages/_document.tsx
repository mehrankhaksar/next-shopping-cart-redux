import React from 'react';
import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
  return (
    <div>
      <Html>
        <Head />
        <body dir="rtl">
          <Main />
          <NextScript />
        </body>
      </Html>
    </div>
  );
};

export default Document;
