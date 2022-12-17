import { gql } from 'apollo-server-express';

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
}

type Query {
    me: User
}

type Auth {
    token: ID!
    user: User
}

input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}

type Mutation {
    login({email: String!, password: String!}): Auth
    addUser({username: String!, email: String!, password: String!}): Auth
    saveBook({authors: [String], description: String!, title: String!, bookId: String!, image: String, link: String}): User
    removeBook({bookId: ID!}): User
}
`;

module.exports = typeDefs;
