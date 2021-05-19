import { gql } from "@apollo/client";


export const CREATE_ENVIRONNEMENT_X_D = gql`
    mutation CreateEnvironmentXDependency(
        $name: String!,
        $programmingLanguageId: Int!,
        $databaseId: Int!,
        $frameworkId: Int!,
        $productOwnerId: Int!
    ){
        createEnvironmentXDependency(input:{
            name: $name,
            programmingLanguageId: $programmingLanguageId,
            databaseId: $databaseId,
            frameworkId: $frameworkId,
            productOwnerId: $productOwnerId
        }){
            environmentXDependency{
                id
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
                        name
                    }
                    productOwner{
                        id
                        name
                    }
                }
                dependancy{
                    id
                    name
                    cmd
                    description
                }
            }
        }
    }
`;


    export const UPDATE_ENVIRONNEMENT_X_D = gql`
        mutation UpdateEnvironmentXDependency(
            $id: Int!,
            $name: String!,
            $programmingLanguageId: Int!,
            $databaseId: Int!,
            $frameworkId: Int!,
            $productOwnerId: Int!
        ){
            updateEnvironmentXDependency(input:{
                id: $id,
                name: $name,
                programmingLanguageId: $programmingLanguageId,
                databaseId: $databaseId,
                frameworkId: $frameworkId,
                productOwnerId: $productOwnerId
            }){
                environmentXDependency{
                    id
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
                            name
                        }
                        productOwner{
                            id
                            name
                        }
                    }
                    dependancy{
                        id
                        name
                        cmd
                        description
                    }
                }
            }
        }
    }
`;

export const DESTROY_ENVIRONNEMENT_X_D = gql`
    mutation DestroyEnvironmentXDependency (
        $id: Int!
    ){
        destroyEnvironmentXDependency(input:{
          id: $id
          }){
            environmentXDependency{
                environment{
                    id
                    name
                }
                dependancy{
                    id
                    name
                    cmd
                    description
                }
            }
        }
    }
`;
