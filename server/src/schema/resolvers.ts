import * as fs from 'fs'
import fakeData from '../utilities/fakeData'

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
          name: string
          email: string
          nationality: string
        }
      },
    ) => {
      const newUser = {
        id: fakeData.length + 1,
        name: args.input.name,
        email: args.input.email,
        nationality: args.input.nationality,
      }
      fakeData.push(newUser)
      const data = `const fakeData = ${JSON.stringify(fakeData)} \n export default fakeData`
      fs.writeFile('./src/utilities/fakeData.ts', data, err => {
        if (err) {
          console.log(err)
        }
      })
      return newUser
    },
    updateEmail: (
      parent,
      args: {
        id: string
        email: string
      },
    ) => {
      fakeData.forEach(user => {
        if (user.id === +args.id) {
          user.email = args.email
        }
      })
      const user = fakeData.filter(user => user.id === +args.id)[0]
      const data = `const fakeData = ${JSON.stringify(fakeData)} \n export default fakeData`
      fs.writeFile('./src/utilities/fakeData.ts', data, err => {
        if (err) {
          console.log(err)
        }
      })
      return user
    },
    deleteUser: (
      parent,
      args: {
        id: string
      },
    ) => {
      const user = fakeData.filter(user => user.id === +args.id)[0]
      fakeData.splice(fakeData.indexOf(user), 1)
      const data = `const fakeData = ${JSON.stringify(fakeData)} \n export default fakeData`
      fs.writeFile('./src/utilities/fakeData.ts', data, err => {
        if (err) {
          console.log(err)
        }
      })
      return user
    },
  },
}

export default resolvers
