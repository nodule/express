module.exports = {
  name: "app",
  ns: "express",
  title: "App",
  description: "express app",
  phrases: {
    active: "Creating Express app"
  },
  ports: {
    input: {},
    output: {
      app: {
        title: "App",
        type: "function"
      },
      express: {
        title: "Express",
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      express: require('express')
    }
  },
  fn: function app(input, $, output, state, done, cb, on, express) {
    var r = function() {
      output = {
        app: $.create(express()),
        express: $.create(express)
      };
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}