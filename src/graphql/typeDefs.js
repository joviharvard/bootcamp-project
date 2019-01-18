const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users(
      substr: String
      hometown: String
      house: String
      concentration: String
      hobbies: String
    ): [User!]
    post(id: ID!): Post!
    posts: [Post!]
    follows (
      status: String!
      followerId: ID!
    ): [Follows!]
  }

  type Mutation {
    createUser(input: CreateUserInput!): LoginReturn!
    createPost(content: String!): CreatePostReturn!
    # createFollow(followerId: ID!, followingId: ID!, status: String!): CreateFollowsReturn!
    # editFollow(id: ID!, status: String!): EditFollowReturn!
    editPost(id: ID!, newContent: String!): EditPostReturn!
    loginUser(email: String!, password: String!): LoginReturn!
  }

  # type CreateFollowsReturn {
  #   followerId: ID!
  #   followingId: ID!
  #   status: String!
  #   error: Error
  # }

  # type editFollowReturn {
  #   followerId: ID!
  #   followingId: ID!
  #   status: String!
  #   error: Error
  # }

  type CreatePostReturn {
    post: Post
    error: Error
  }

  type EditPostReturn {
    post: Post
    error: Error
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    birthday: String
    concentration: String
    hometown: String
    house: String
    gender: String
    bio: String
    picture: String
    hobbies: [HobbyInput!]
  }

  input HobbyInput {
    hobby: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    birthday: String
    concentration: String
    hometown: String
    house: String
    gender: String
    bio: String
    picture: String
  }

  type Follows {
    id: ID!
    followerId: ID!
    followingId: ID!
    status: String!
  }

  type Post {
    id: ID!
    content: String!
  }

  type LoginReturn {
    user: User
    token: String
    error: Error
  }

  type Error {
    message: String
  }
`
