// const User = require('../../models/User')
// const Follows = require('../../models/Follows')

// const createFollow = async (obj, args, context) => {
//     if (!context.user) {
//         return {
//             error: {
//                 message: 'User not logged in',
//             }
//         }
//     }
//     const {followerId, followingId, status} = args

//     const follow = await Follows.query()
//         .insert({followerId, followingId, status})
    
//     if (!follow) {
//         throw new Error ('Could not add follow')
//     }

//     return follow
// }

// const editFollow = async (obj, args, context) => {
//     if (!context.user) {
//         return {
//             error: {
//                 message: 'User not logged in',
//             }
//         }
//     }
//     const { id, status } = args
//     const update = await Follows.query()
//         .patch({status: status})
//         .findById(id)

//     return update
// }

// const resolver = { Mutation: { createFollow, editFollow } }

// module.exports = resolver
