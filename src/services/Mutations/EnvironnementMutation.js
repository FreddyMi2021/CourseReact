import { gql } from "@apollo/client";

export const CREATE_ENVIRONNEMENT = gql`
    mutation CreateEnvironment(
        $name: String!,
        $programmingLanguageId: Int!,
        $databaseId: Int!,
        $frameworkId: Null,
        $contentManagementSystemId: Null,
        $productOwnerId: Int!
    )
    {
        createEnvironment(input:{
            name: $name,
            programmingLanguageId: $programmingLanguageId,
            databaseId: $databaseId,
            frameworkId: $frameworkId,
            productOwnerId: $productOwnerId
        }){
            environment{
                id
                name
                programmingLanguage{
                    id
                    name
                }
                database{
                    id
                    name
                }
                framework{
                    id
                    name
                }
                contentManagementSystem{
                    id
                    name
                }
                productOwner{
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_ENVIRONNEMENT_FRAMEWORK = gql`
    mutation CreateEnvironment(
        $name: String!,
        $programmingLanguageId: Int!,
        $databaseId: Int!,
        $frameworkId: Int!,
        $productOwnerId: Int!
    )
    {
        createEnvironment(input:{
            name: $name,
            programmingLanguageId: $programmingLanguageId,
            databaseId: $databaseId,
            frameworkId: $frameworkId,
            productOwnerId: $productOwnerId
        }){
            environment{
                id
                name
                programmingLanguage{
                    id
                    name
                }
                database{
                    id
                    name
                }
                framework{
                    id
                    name
                }
                productOwner{
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_ENVIRONNEMENT_CMS = gql`
    mutation CreateEnvironment(
        $name: String!,
        $programmingLanguageId: Int!,
        $databaseId: Int!,
        $contentManagementSystemId: Int!,
        $productOwnerId: Int!
    )
    {
        createEnvironment(input:{
            name: $name,
            programmingLanguageId: $programmingLanguageId,
            databaseId: $databaseId,
            contentManagementSystemId: $contentManagementSystemId,
            productOwnerId: $productOwnerId
        }){
            environment{
                id
                name
                programmingLanguage{
                    id
                    name
                }
                database{
                    id
                    name
                }
                contentManagementSystem{
                    id
                    name
                }
                productOwner{
                    id
                    name
                }
            }
        }
    }
`;


export const UPDATE_ENVIRONNEMENT = gql`
    mutation UpdateEnvironment(
        $id: Int!,
        $name: String!,
        $programmingLanguageId: Int!,
        $databaseId: Int!,
        $frameworkId: Int!,
        $contentManagementSystemId: Int!,
        $productOwnerId: Int!
    )
    {
        updateEnvironment(input:{
            id: $id,
            name: $name,
            programmingLanguageId: $programmingLanguageId,
            databaseId: $databaseId,
            frameworkId: $frameworkId,
            contentManagementSystemId: $contentManagementSystemId,
            productOwnerId: $productOwnerId
        }){
            environment{
                id
                name
                programmingLanguage{
                    id
                    name
                }
                database{
                    id
                    name
                }
                framework{
                    id
                    name
                }
                contentManagementSystem{
                    id
                    name
                }
                productOwner{
                    id
                    name
                }
            }
        }
    }
`;

export const DESTROY_ENVIRONNEMENT = gql`
    mutation DestroyEnvironment (
        $id: ID!
    ){
        destroyEnvironment(input:{
          id: $id
          }){
            environments{
                id
                name
                programmingLanguage{
                    id
                    name
                }
                database{
                    id
                    name
                }
                framework{
                    id
                    name
                }
                productOwner{
                    id
                    name
                }
            }
        }
    }
`;
