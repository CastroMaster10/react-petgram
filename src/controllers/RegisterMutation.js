import {Mutation} from 'react-apollo';
import {gql} from 'apollo-boost';

const Register= gql`
mutation signup($input: UserCredentials!) {
    signup (input: $input)
}
`