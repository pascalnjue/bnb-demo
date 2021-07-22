import '../src/styles/globals.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
