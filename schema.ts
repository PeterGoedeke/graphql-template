import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    user(id: ID!): User!
  }

  type User {
    id: ID!
    email: String!
    profile: Profile
  }

  type Profile {
    age: Int
    name: String
  }
`