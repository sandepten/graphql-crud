const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        nationality: Nationality
        friends: [User!]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        title: String!
        year: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(title: String!): Movie
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateEmail(id: ID!, email: String!): User
        deleteUser(id: ID!): User
    }

    input CreateUserInput {
        name: String!
        email: String!
        nationality: String = "Indian"
    }

    enum Nationality {
        Indian
        American
        Italian
    }
`

export default typeDefs
