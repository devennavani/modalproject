import { ApolloClient, InMemoryCache } from '@apollo/client';

const VERCEL_GIT_PULL_REQUEST_ID = process.env.VERCEL_GIT_PULL_REQUEST_ID;
console.log('VERCEL_GIT_PULL_REQUEST_ID', VERCEL_GIT_PULL_REQUEST_ID);
const MODAL_ENVIRONMENT_NAME = VERCEL_GIT_PULL_REQUEST_ID ? `pr${VERCEL_GIT_PULL_REQUEST_ID}` : 'dev';
const client = new ApolloClient({
    uri: `https://devennavani-${MODAL_ENVIRONMENT_NAME}--api-fastapi-app.modal.run/graphql`,
    cache: new InMemoryCache(),
  });

export default client;
