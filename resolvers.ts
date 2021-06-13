import { Resolvers } from "./resolvers-types-valid";
import { UserModel } from "./models";

const USERS: UserModel[] = [
  {
    _id: "1",
    services: { email: { address: "test@email.com" } },
    profile: { age: 20, firstName: "Dotan", lastName: "Simha" }
  }
];


export const resolvers: Resolvers = {
  Query: {
    user: (parent, args) => {
      return USERS.find(u => u._id === args.id) as UserModel;
    }
  },
  User: {
    id: (user) => {
      return user._id
    },
    email: (user, args, context) => {
      return user.services.email.address
    },
    profile: (user, args, context) => {
      return user.profile
    }
  },
  Profile: {
    name: user => {
      return `${user.firstName} ${user.lastName}`
    }
  }
};
