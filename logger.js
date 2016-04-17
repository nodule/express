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
      path: {
        type: "string",
        title: "Path",
        required: true
      },
      app: {
        type: "function",
        title: "App",
        readonly: true
      },
      express: {
        type: "function",
        title: "Express",
        readonly: true
      }
    },
    output: {}
  },
  dependencies: {
    npm: {
      "express-logger": require('express-logger')
    }
  },
  fn: function logger(input, $, output, state, done, cb, on, express_logger) {
    var r = function() {
      $.app.logger(expressLogger(), function loggerCallback() {
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