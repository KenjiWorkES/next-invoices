import type { AppProps } from 'next/app';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';

import '@/styles/reset.css';

import { League_Spartan } from 'next/font/google';

const spartan = League_Spartan({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={spartan.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
