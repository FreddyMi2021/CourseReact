import {gql} from '@apollo/client';

export const ALL_ENV = gql`
    query{
        allEnvironments{
            id
            name
            programmingLanguage{
                id
                name
            }
            database{
                id
                name
            }
            framework{
                id
                name
            }
            contentManagementSystem{
                id
                name
            }
            productOwner{
                id
                name
                email
            }
        }
    }
`