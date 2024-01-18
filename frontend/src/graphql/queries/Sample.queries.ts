import { gql, useQuery } from "@apollo/client";
import { SampleQuery, SampleQueryVariables } from "../__generated__/types";

export const SAMPLE_QUERY = gql`
    query Sample($num: Int!, $nums: [Int!]!) {
        square(num: $num)
        squareMap(nums: $nums)
    }
`;

export const useSampleQuery = (variables: SampleQueryVariables) => 
    useQuery<SampleQuery, SampleQueryVariables>(SAMPLE_QUERY
        , { variables });
