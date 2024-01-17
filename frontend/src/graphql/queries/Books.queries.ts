import { gql, useQuery } from "@apollo/client";
import { GetBooksQuery, GetBooksQueryVariables } from "../__generated__/types";

export const GET_BOOKS_QUERY = gql`
    query GetBooks {
        books {
            title
            author
        }
    }
`;

export const useGetBooksQuery = () => useQuery<GetBooksQuery, GetBooksQueryVariables>(GET_BOOKS_QUERY);
