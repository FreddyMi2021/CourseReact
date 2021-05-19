import { gql } from "@apollo/client";


export const CREATE_FRAMEWORK = gql`
    mutation CreateFramework(
        $name: String!,
        $cmd: String!,
        $programmingLanguageId: Int!
    ){
        createFramework(input:{
            name: $name,
            cmd: $cmd,
            programmingLanguageId: $programmingLanguageId
        }){
            framework{
                id
                name
                cmd
                programmingLanguage{
                    id
                    name
                }
            }
        }
    }
`;

export const UPDATE_FRAMEWORK = gql`
    mutation UpdateFramework(
        $id: Int!,
        $name: String!,
        $cmd: String!,
        $programmingLanguageId: Int!
    ){
        updateFramework(input:{
            id: $id,
            name: $name,
            cmd: $cmd,
            programmingLanguageId: $programmingLanguageId,
        }){
            framework{
                id
                name
                cmd
                programmingLanguage{
                    id
                    name
                }
            }
        }
    }
`;

export const DESTROY_FRAMEWORK = gql`
    mutation DestroyFramework (
        $id: ID!
    ){
        destroyFramework(input:{
          id: $id
        }){
            frameworks{
                id
                name
                cmd
            }
        }
    }
`;
