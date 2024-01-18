export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  square: Scalars['Int']['output'];
  squareMap: Array<Scalars['Int']['output']>;
};


export type QuerySquareArgs = {
  num: Scalars['Int']['input'];
};


export type QuerySquareMapArgs = {
  nums: Array<Scalars['Int']['input']>;
};

export type SampleQueryVariables = Exact<{
  num: Scalars['Int']['input'];
  nums: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type SampleQuery = { __typename?: 'Query', square: number, squareMap: Array<number> };
