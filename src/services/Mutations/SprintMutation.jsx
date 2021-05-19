import {gql} from '@apollo/client'

export const CREATE_SPRINT = gql`
    mutation CreateSprint(
        $name: String!,
        $description: String!,
        $deadline: String!,
        $teamNumber: Int!,
        $status: String!,
        $projectId: Int!,
        $environmentId: Int!
    ){
        createSprint(input: {
            name: $name,
            description: $description,
            deadline: $deadline,
            teamNumber: $teamNumber,
            status: $status,
            projectId: $projectId,
            environmentId: $environmentId
        }){
            sprint{
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
    }
`

export const UPDATE_SPRINT = gql`
    mutation UpdateSprint(
        $id: Int!,
        $name: String!,
        $description: String!,
        $deadline: String!,
        $teamNumber: Int!,
        $status: String!,
        $projectId: Int!,
        $environmentId: Int!
    ){
        updateSprint(input: {
            id: $id,
            name: $name,
            description: $description,
            deadline: $deadline,
            teamNumber: $teamNumber,
            status: $status,
            projectId: $projectId,
            environmentId: $environmentId
        }){
            sprint{
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
    }
`

export const DESTROY_SPRINT = gql`
    mutation DestroySprint(
        $id: ID!
    ){
        destroySprint(input: {
            id: $id
        }){
            sprints{
                id
            }
        }
    }
`