import {gql} from '@apollo/client'

export const DESTROY_PO = gql`
    mutation DestroyProductOwner(
        $id: ID!,
    ){
        destroyProductOwner(
            input: {
                id: $id,
            }
        ){
            productOwners{
                id
            }
        }
    }
`