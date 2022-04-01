import React from 'react';
import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
  return (
    <div>
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
          ></link>
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    </div>
  );
};

export default Document;
