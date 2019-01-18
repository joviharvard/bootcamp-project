const User = require('../../../models/User')
const Follows = require('../../../models/Follows')
const { raw } = require('objection');

const userResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a user given a user id.
  const user = await User.query().where('id', args.id)
  return user[0]
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args
  const allUsers = await User.query()
  .modify(function(queryBuilder){
    if(hobbies){
      queryBuilder.whereExists(User.relatedQuery('hobbies')
      .where('hobby', hobbies.toUpperCase()))
    }
    if(substr) {
      queryBuilder.andWhere(raw('lower("name")'), 'like', '%' + substr.toLowerCase() + '%')
    }
    if(hometown){
      queryBuilder.andWhere('hometown', hometown)
    }
    if(house){
      queryBuilder.andWhere('house', house)
    }
    if(concentration){
      queryBuilder.andWhere('concentration', concentration)
    }
  })
  return allUsers;
}


const followsResolver = async (obj, args, context) => {
  const follows = await Follows.query()
  .modify(function(queryBuilder){
  if (args.status){
    queryBuilder.where('status', args.status).where('followerId', args.followerId)
  }
})
  return follows
}



const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
    follows: followsResolver,
  },
}

module.exports = resolver
