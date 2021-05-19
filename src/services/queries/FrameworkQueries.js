import {gql} from '@apollo/client'

export const ALL_FRAMEWORK = gql`
    query{
        allFrameworks{
            id
            name
            cmd
            programmingLanguage{
                id
                name
            }
        }
    }
`