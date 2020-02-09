import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';


const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        task: [Task]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    input TaskInput {
        title: String!
        description: String!
        number: Int
    }

    type User {
        firstname: String
        lastname: String
        age: Int
    }

    input UserInput {
        firstname: String
        lastname: String
        age: Int
    }

    type Mutation {
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})