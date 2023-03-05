const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { resolvers } = require('./schema/resolvers')
const { typeDefs } = require('./schema/typeDefs')

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})

export {}
