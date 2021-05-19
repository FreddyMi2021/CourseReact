import {gql} from '@apollo/client';

export const ALL_PROJECT = gql`
    query{
        allProjects{
            id
            name
            description
            deadline
            productOwner{
                id
                name
            }
        }
    }
`