import {gql} from '@apollo/client'

export const ALL_DEPENDANCY = gql`
    query{
        allDependencies{
            id
            name
            cmd
            description
            framework{
                id
                name
                cmd
            }
            contentManagementSystem{
                id
                name
            }
        }
    }
`