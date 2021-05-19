import {gql} from '@apollo/client'

export const CREATE_PROJECT = gql`
    mutation CreateProject(
        $name: String!,
        $description: String!,
        $deadline: String!,
        $productOwnerId: Int!
    ){
        createProject(input: {
            name: $name,
            description: $description,
            deadline: $deadline,
            productOwnerId: $productOwnerId
        }){
            project{
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
    }
`
export const UPDATE_PROJECT = gql`
    mutation UpdateProject(
        $id: Int!,
        $name: String!,
        $description: String!,
        $deadline: String!,
        $productOwnerId: Int!
    ){
        updateProject(input: {
            id: $id,
            name: $name,
            description: $description,
            deadline: $deadline,
            productOwnerId: $productOwnerId
        }){
            project{
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
    }
`

export const DESTROY_PROJECT = gql`
    mutation DestroyProject(
        $id: ID!
    ){
        destroyProject(input: {
            id: $id
        }){
            projects{
                id
            }
        }
    }
`