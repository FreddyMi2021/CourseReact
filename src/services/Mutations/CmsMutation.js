import { gql } from "@apollo/client";


export const CREATE_CMS = gql`
    mutation CreateContentManagementSystem(
        $name: String!,
        $cmd: String!,
        $programmingLanguageId: Int!
    ){
        createCms(input:{
            name: $name,
            cmd: $cmd,
            programmingLanguageId: $programmingLanguageId,
        }){
            contentManagementSystem{
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


export const UPDATE_CMS = gql`
    mutation UpdateContentManagementSystem(
        $id: Int!,
        $name: String!,
        $cmd: String!,
        $programmingLanguageId: Int!
    ){
        updateContentManagementSystem(input:{
            id: $id,
            name: $name,
            cmd: $cmd,
            programmingLanguageId: $programmingLanguageId
        }){
            contentManagementSystem{
                id
                name
                programmingLanguage{
                    id
                    name
                }
                
            }
        }
    }
`;

export const DESTROY_CMS = gql`
    mutation DestroyContentManagementSystem (
        $id: ID!,
    ){
        destroyCms(
            input:{
                id: $id,
            }
        ){
            contentManagementSystems{
                id
            }
        }
    }
`;

