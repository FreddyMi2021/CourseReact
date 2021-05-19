import {gql} from '@apollo/client'

export const ALL_LANGUAGE = gql`
    query{
        allProgrammingLanguages{
            id
            name
        }
    }
`