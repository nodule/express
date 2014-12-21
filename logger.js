module.exports = {
  name: "logger",
  ns: "express",
  title: "Logger",
  description: "Express Logger",
  phrases: {
    active: "Using Logger middleware"
  },
  ports: {
    input: {
      app: {
        type: "function",
        title: "App",
        readonly: "true"
      },
      express: {
        type: "function",
        title: "Express",
        readonly: "true"
      }
    },
    output: {}
  },
  fn: function logger(input, output, state, done, cb, on) {
    var r = function() {
      input.app.logger(input.express.logger(), function loggerCallback() {
        cb({});
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}