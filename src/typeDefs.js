const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello:String
    getAllTasks: [Task]
    

  }
  input TaskInput {
    title: String
    description: String
  }

  type Mutation {
    createTask(task: TaskInput): Task
  }
`;

module.exports = {
  typeDefs,
};
