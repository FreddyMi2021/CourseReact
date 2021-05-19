import {gql} from '@apollo/client';

export const ALL_SPRINT = gql`
    query{
        allSprints{
            id
            name
            description
            deadline
            teamNumber
            status
            project{
                id
                name
            }
            environment{
                id
                name
            }
        }
    }
`