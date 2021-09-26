import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GitHub Topic Explorer</title>
      </Head>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
