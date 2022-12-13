const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models')
const { Tech, Matchup, User } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, {username, email, password}) => {
        const user = await User.create({ username, email, password});
        const token = signToken(user);
        return { user, token };
    },
    login: async (parent, {email, password}) => {
        
    }
  }
//   Mutation: {
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
};

module.exports = resolvers;
