'use client'
 
import { ReactNode } from 'react'
import client from '../graphql/apolloClient'
import { ApolloProvider } from '@apollo/client'
 
export function Providers({ children }: { children?: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
