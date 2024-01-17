import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://devennavani-dev--api-fastapi-app.modal.run/graphql',
    cache: new InMemoryCache(),
  });

export default client;