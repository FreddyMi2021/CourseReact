import { gql } from "@apollo/client";


export const CREATE_DEPENDANCY_FRAMEWORK = gql`
  mutation CreateDependency(
    $name: String!,
    $cmd: String!,
    $description: String!,
    $frameworkId: Int!
  ){
    createDependency(input:{
        name: $name,
        cmd: $cmd,
        description: $description,
        frameworkId: $frameworkId
    }){
        dependency{
          id
          name
          cmd
          description
          framework{
            id
            name
          }
        }
      }
  }
`;

export const CREATE_DEPENDANCY_CMS = gql`
  mutation CreateDependency(
    $name: String!,
    $cmd: String!,
    $description: String!,
    $contentManagementSystemId: Int!
  ){
    createDependency(input:{
        name: $name,
        cmd: $cmd,
        description: $description,
        contentManagementSystemId: $contentManagementSystemId
    }){
        dependency{
          id
          name
          cmd
          description
          contentManagementSystem{
            id
            name
          }
        }
      }
  }
`;


export const UPDATE_DEPENDANCY = gql`
  mutation UpdateDependency(
    $id: ID!,
    $name: String!,
    $cmd: String!,
    $description: String!,
    $frameworkId: ID!
  ){
    updateDependency(input:{
      id: $id,
      name: $name,
      cmd: $cms,
      description: $description,
      frameworkId: $frameworkId
    }){
        dependency{
        id
        name
        cmd
        description
        framework{
            id
            name
        }
      }
    }
  }
`;

export const DESTROY_DEPENDENCY = gql`
    mutation DestroyDependency (
        $id: ID!,
    ){
        destroyDependency(
          input:{
            id: $id
          }
        ){
            dependencies{
                id
            }
            
        }
    }
`;
