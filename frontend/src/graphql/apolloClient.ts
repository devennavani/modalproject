import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'dotenv/config'

const getApiUrl = () => {
  // Should only be present when running UI locally
  if (process.env.NEXT_PUBLIC_MODAL_ENVIRONMENT) {
    // This assumes you are running your API via `model serve` in the MODAL_ENVIRONMENT environment
    return `https://devennavani-${process.env.NEXT_PUBLIC_MODAL_ENVIRONMENT}--api-fastapi-app-dev.modal.run/graphql`;
  } else {
    const VERCEL_GIT_PULL_REQUEST_ID = process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID;
    const MODAL_ENVIRONMENT_NAME = VERCEL_GIT_PULL_REQUEST_ID ? `pr${VERCEL_GIT_PULL_REQUEST_ID}` : 'dev';
    return `https://devennavani-${MODAL_ENVIRONMENT_NAME}--api-fastapi-app.modal.run/graphql`;
  }
}
const url = getApiUrl();
const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });

export default client;
