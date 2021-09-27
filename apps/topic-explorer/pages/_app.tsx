import { AppProps } from 'next/app';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>GitHub Topic Explorer</title>
      </Head>
      <div className="font-sans subpixel-antialiased text-base text-gray-900 bg-gray-50 min-h-screen font-semibold">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default CustomApp;
