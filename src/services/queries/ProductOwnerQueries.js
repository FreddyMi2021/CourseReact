import {gql} from '@apollo/client';

export const ALL_PO = gql`
    query{
        allProductOwners{
            id
            name
            email
        }
    }
`