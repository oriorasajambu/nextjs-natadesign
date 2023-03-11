import '@/styles/output.css'
import type { AppProps } from 'next/app'

import { Playfair_Display, DM_Sans, DM_Serif_Display } from '@next/font/google';

const playFairSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-play-serif',
  weight: ['400', '500', '600', '700', '800', '900']
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${playFairSerif.variable} scroll-smooth font-play-serif ${dmSans.variable} font-dm-sans overflow-x-hidden bg-partial`}>
      <Component {...pageProps} />
    </main>
  )
}
