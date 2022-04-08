const Task = require("./models/Task");

const resolvers = {
  Query: {
    hello: () => "Hello world",
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
  },
  Mutation: {
    async createTask(_,args) {
      const { title, description } = args;
      const newTask = new Task({ title, description });
      console.log(newTask);
      await newTask.save();
      return newTask;
    }
  },
  
};

module.exports = {
  resolvers,
};
