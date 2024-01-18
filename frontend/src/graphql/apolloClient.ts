import { ApolloClient, InMemoryCache } from '@apollo/client';

const getApiUrl = () => {
  if (process.env.MODAL_ENVIRONMENT) {
    return `https://devennavani-${process.env.MODAL_ENVIRONMENT}--api-fastapi-app-dev.modal.run/graphql`;
  } else {
    const VERCEL_GIT_PULL_REQUEST_ID = process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID;
    const MODAL_ENVIRONMENT_NAME = VERCEL_GIT_PULL_REQUEST_ID ? `pr${VERCEL_GIT_PULL_REQUEST_ID}` : 'dev';
    return `https://devennavani-${MODAL_ENVIRONMENT_NAME}--api-fastapi-app.modal.run/graphql`;
  }
}

const client = new ApolloClient({
    uri: getApiUrl(),
    cache: new InMemoryCache(),
  });

export default client;
