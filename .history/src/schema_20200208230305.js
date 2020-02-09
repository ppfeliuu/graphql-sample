import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

`;

makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})