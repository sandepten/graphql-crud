import * as fs from 'fs'
import { fakeData } from '../utilities/fakeData.js'

interface fakeData {
  fakeData: Array<{
    id: number
    name: string
    email: string
    nationality: string
  }>
}
const resolvers = {
  Query: {
    users: () => {
      return fakeData
    },
    user: (parent, args: { id: string }) => {
      return fakeData.filter(user => user.id === +args.id)[0]
    },
    movies: () => {
      return fakeData
    },
    // movie: (parent, args: { title: string }) => {
    // return fakeData.filter(movie => movie.title === args.title)[0]
    // },
  },
  User: {
    favoriteMovies: () => {
      return fakeData // instead of this fakeData we will have to return the movies that the user has favorite
    },
  },
  Mutation: {
    createUser: (
      parent,
      args: {
        input: {
          id: string
          name: string
          email: string
          nationality: string
        }
      },
    ) => {
      const newUser = {
        id: +args.input.id,
        name: args.input.name,
        email: args.input.email,
        nationality: args.input.nationality,
      }
      fakeData.push(newUser)
      const data = `const fakeData = ${JSON.stringify(fakeData)} \n module.exports = { fakeData }`
      fs.writeFile('./src/utilities/fakeData.js', data, err => {
        if (err) {
          console.log(err)
        }
      })
      return newUser
    },
  },
}

module.exports = { resolvers }
