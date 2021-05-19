import {gql} from '@apollo/client'

export const ALL_DATABASE = gql`
    query{
        allDatabases{
            id
            name
        }
    }
`

export const SHOW_DATABASE = (id)=>{
    return gql`
        query{
            database(id: ${id}){
                id
                name
                environments{
                    id
                    name
                }
            }
        }
    `
}