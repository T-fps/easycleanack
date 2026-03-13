import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="description" content="Easy Clean ACK — Nantucket's finest mobile auto detailers. Professional car detailing on Nantucket Island, MA." />
        <meta property="og:title" content="Easy Clean ACK | Mobile Auto Detailing | Nantucket, MA" />
        <meta property="og:description" content="Nantucket's finest mobile auto detailers. 100% satisfaction guaranteed since 2021." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
