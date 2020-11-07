import { AppProps } from 'next/dist/next-server/lib/router/router';

import '../styles/index.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): any {
  return <Component {...pageProps} />;
}

export default MyApp;
