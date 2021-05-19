import { gql } from "@apollo/client";


const CREATE_PROGRAMMING_LANGUAGE = gql`
    mutation CreateProgrammingLanguage(
        $name: String!
    ){
        createProgrammingLanguage(input:{
            name: $name
        }){
            programmingLanguage{
                id
                name
            }
        }
    }
`;


const UPDATE_PROGRAMMING_LANGUAGE = gql`
    mutation UpdateProgrammingLanguage(
        $id: Int!,
        $name: String!
    ){
        updateProgrammingLanguage(input:{
            id: $id,
            name: $name
        }){
            programmingLanguage{
                id
                name
            }
        }
    }
`;

const DESTROY_PROGRAMMING_LANGUAGE = gql`
    mutation DestroyProgrammingLanguage (
        $id: ID!
    ){
        destroyProgrammingLanguage(input:{
          id: $id
        }){
            programmingLanguages{
                id
                name
            }
        }
    }
`;
export {CREATE_PROGRAMMING_LANGUAGE, UPDATE_PROGRAMMING_LANGUAGE, DESTROY_PROGRAMMING_LANGUAGE}