import { gql } from "@apollo/client";


export const CREATE_DATABASE = gql`
    mutation CreateDatabase(
        $name: String!
    ){
        createDatabase(input:{
            name: $name
        }){
            database{
                id
                name
            }
        }
    }
`;


export const UPDATE_DATABASE = gql`
    mutation UpdateDatabase(
        $id: Int!,
        $name: String!
    ){
        updateDatabase(input:{
            id: $id,
            name: $name
        }){
            database{
                id
                name
            }
        }
    }
`;

export const DESTROY_DATABASE = gql`
    mutation DestroyDatabase (
        $id: ID!,
    ){
        destroyDatabase(
            input:{
                id: $id,
            }
        ){
            databases{
                id
            }
        }
    }
`;

