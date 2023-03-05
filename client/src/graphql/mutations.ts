import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      email
      nationality
    }
  }
`;

export const UPDATE_EMAIL = gql`
  mutation updateEmail($id: ID!, $email: String!) {
    updateEmail(id: $id, email: $email) {
      name
      email
    }
  }
`;
