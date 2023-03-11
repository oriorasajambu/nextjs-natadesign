import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-86C4LY3HT9" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-86C4LY3HT9');
        `}
        </Script>
        <NextScript />
      </body>
    </Html>
  )
}
