import {gql} from '@apollo/client'

export const ALL_CMS = gql`
    query{
        allCms{
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